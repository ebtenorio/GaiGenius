param(
    [string]$Revision = 'master',
    [string]$Root = (Split-Path $PSScriptRoot -Parent)
)

$ErrorActionPreference = 'Stop'
$output = Join-Path $Root 'vendor'
$characters = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
$commit = Invoke-RestMethod -Uri "https://api.github.com/repos/KanjiVG/kanjivg/commits/$Revision"
$data = [ordered]@{}
$license = $null

foreach ($character in $characters.ToCharArray()) {
    $code = '{0:x5}' -f [int]$character
    $response = Invoke-WebRequest -UseBasicParsing -Uri "https://raw.githubusercontent.com/KanjiVG/kanjivg/$($commit.sha)/kanji/$code.svg"
    $settings = New-Object System.Xml.XmlReaderSettings
    $settings.DtdProcessing = [System.Xml.DtdProcessing]::Ignore
    $settings.XmlResolver = $null
    $reader = [System.Xml.XmlReader]::Create((New-Object System.IO.StringReader([string]$response.Content)), $settings)
    $document = New-Object System.Xml.XmlDocument
    try { $document.Load($reader) } finally { $reader.Dispose() }
    $paths = @($document.SelectNodes('//*[local-name()="path"]') | ForEach-Object { $_.GetAttribute('d') })
    $numbers = @($document.SelectNodes('//*[local-name()="text"]') | ForEach-Object {
        [ordered]@{ label = $_.InnerText; transform = $_.GetAttribute('transform') }
    })
    if ($paths.Count -eq 0 -or $paths.Count -ne $numbers.Count) { throw "Incomplete stroke data for $code" }
    $data[[string]$character] = [ordered]@{ paths = $paths; numbers = $numbers }
    if (-not $license) { $license = $document.SelectSingleNode('//comment()').Value.Trim() }
}

if ($data.Count -ne 92) { throw "Expected 92 kana; found $($data.Count)" }
$source = [ordered]@{
    name = 'KanjiVG'
    url = 'https://kanjivg.tagaini.net/'
    revision = $commit.sha
    license = 'CC BY-SA 3.0'
    licenseUrl = 'https://creativecommons.org/licenses/by-sa/3.0/'
    adaptation = 'Ordered stroke paths and number positions extracted from the original SVG files.'
}
$content = 'const kanaStrokeSource = ' + ($source | ConvertTo-Json -Compress) + ";`nconst kanaStrokes = " + ($data | ConvertTo-Json -Depth 8 -Compress) + ";`n"
$encoding = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText((Join-Path $output 'kana-strokes.js'), $content, $encoding)
[System.IO.File]::WriteAllText((Join-Path $output 'KANJIVG-LICENSE.txt'), $license + "`n`nSource revision: $($commit.sha)`nAdaptation: ordered paths and stroke-number positions extracted from the original SVG files.`n", $encoding)
Write-Output "Verified and bundled $($data.Count) kana from KanjiVG revision $($commit.sha)."