param (
    [parameter(mandatory)][string]$StagingFolder
)
Write-Output "Staging folder: $StagingFolder"
$CalculationToolWebFolder = "E:\CalculationToolUI"
$AppPoolName = "CalculationToolUIAppPool"

try {
    Stop-WebAppPool -Name $AppPoolName
    Write-Output "Waiting for application pool to stop..."
    do
    {
        Start-Sleep -s 5
        $State = Get-WebAppPoolState -Name $AppPoolName
        Write-Output "Current state: $($State.Value)"
    } while ($State.Value -ne 'Stopped')

    #Clean target folder
    if (Test-Path $CalculationToolWebFolder) {
        Remove-Item "$CalculationToolWebFolder\*" -Recurse -Force
    }

    Copy-Item "$StagingFolder\ConfiguratorEnrichedAPI\*" "$CalculationToolWebFolder" -Recurse -Force
    
    if (!(Test-Path "$CalculationToolWebFolder\wwwroot")) {
        New-Item -Path "$CalculationToolWebFolder\" -Name "wwwroot" -ItemType "directory"
    }
    Copy-Item "$StagingFolder\CalculationToolUI\*" "$CalculationToolWebFolder\wwwroot" -Recurse -Force
    Copy-Item "$StagingFolder\CalculationToolUI\*.svg" "$CalculationToolWebFolder\wwwroot\storybook" -Recurse -Force
}
catch {
    Write-Error "Error occurred:"
    Write-Error $_
    exit 1
}
finally {
    Write-Output "Starting application pool"
    Start-WebAppPool -Name $AppPoolName
}
