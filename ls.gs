// Not taking credit for this
// its literally a simple change that improved my usage of ls command 
// may further improve this in near future 

//command: ls
ValidateInput = function(input)
	if input == "-la" or if input == "-la" or input == "-l" or input == "-a" then return true
	return false
end function 

if params.len > 3 or (params.len == 1 and params[0].indexOf("-") != null and not ValidateInput(params[0])) or (params.len == 2 and not ValidateInput(params[0])) or (params.len == 3 and (not ValidateInput(params[0]) or not ValidateInput(params[1]))) then
	print(command_info("ls_usage"))
	
else
	computer = get_shell.host_computer
	folderPath = current_path
	if params and params[params.len - 1].indexOf("-") == null then
		folderPath = params[params.len - 1]
	end if
	
	folder = computer.File(folderPath)
	if folder == null then
		print("ls: No such file or directory")
	else
		if not folder.has_permission("r") then
			print("ls: permission denied")

		else
			showHide = 0
			if params and params[0].indexOf("a") != null then
				showHide = 1
			end if

			showDetails = 0
			if params and params[0].indexOf("l") != null then
				showDetails = 1
			end if

			subFiles = folder.get_folders + folder.get_files
			output = ""
			for subFile in subFiles
				nameFile = subFile.name
				permission = subFile.permissions
				owner = subFile.owner
				size = subFile.size
				group = subFile.group

				if showHide or nameFile.indexOf(".") != 0 then
					if output.len > 0 then 
						output = output + "\n"
					end if
					if showDetails then
						output = output + permission + " " + owner + " " + group + " " + size + " 00:00 " + nameFile
					else
						output = output + nameFile
					end if
				end if
			end for
			
			print(format_columns(output))
			
		end if
	end if
end if
