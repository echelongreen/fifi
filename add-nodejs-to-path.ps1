# This script adds Node.js to the system PATH environment variable

# Get the current PATH
$currentPath = [Environment]::GetEnvironmentVariable("PATH", "User")

# Check if Node.js is already in the PATH
if ($currentPath -like "*C:\Program Files\nodejs*") {
    Write-Host "Node.js is already in your PATH."
} else {
    # Add Node.js to the PATH
    $newPath = $currentPath + ";C:\Program Files\nodejs"
    [Environment]::SetEnvironmentVariable("PATH", $newPath, "User")
    Write-Host "Node.js has been added to your PATH."
}

Write-Host "You may need to restart your terminal or computer for the changes to take effect." 