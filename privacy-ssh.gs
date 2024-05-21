// By aldusbumdlebore
// 05 / 20 / 2024

// Another version of ssh for streaming without revealing IP address and password.
// perfect for streaming

usage = function()
    print("Usage: ssh [(opt port)]")
end function
port = 22
if params.len >= 2 then exit(usage)
if params.len == 1 then
    if typeof(params[1].to_int) != "number" then exit(usage)
else
    port = params[1]
end if
print("Privacy SSH for streaming")
print("By aldusbumdlebore")
print("")
user = user_input("Username: ")
ip = = user_input("Ip address: ", true)
password = user_input("Password: ", true)
shell = get_shell.connect_service(ip, port, user, password, "ssh")
if typeof(shell) == "string" then exit(shell)
if shell then 
    shell.start_terminal
else 
    print("connection failed")
end if
