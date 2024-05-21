// By aldusbumdlebore
// 05 / 20 / 2024

// Another version of ssh for streaming without revealing IP address and password.
// perfect for streaming

usage = function()
    print("Usage: ssh [(opt) port]");
end function

print("Privacy SSH for streaming")
print("By aldusbumdlebore")
print("")

if params.len == 0 or params.len == null then port = 22
if params.len >= 2 then exit(usage)
if params.len == 1 then
	port = params[0].to_int
end if
if typeof(port) != "number" then exit(usage)

user = user_input("Username: ")
ip = user_input("Ip address: ", true)
password = user_input("Password: ", true)
print("")
print("Connecting.....")
shell = get_shell.connect_service(ip, port, user, password, "ssh")
if typeof(shell) == "string" then exit(shell)
if shell then 
    shell.start_terminal
else 
    print("connection failed")
end if
