// By aldusbumdlebore
// 05 / 20 / 2024

// in this version, you connect with
// user@[ip address] [(opt) port]
// then prompted for password which is hidden ********
if params.len < 1 or params.len > 2 then exit("Usage: ssh [user@ip address] [(opt) port]")
creds = params[0].split("@")
user = creds[0]
ip = creds[1]
port = 22
// params is a list of strings, so you have to convert it to integer, which is what connect_service accepts.
if params.len == 3 then port = params[1].to_int
if typeof(port) != "number" then exit("Invalid port: " + port)
password = user_input("Password: ", true)

shell = get_shell.connect_service(ip, port, user, password, "ssh")
if typeof(shell) == "string" then exit(shell)
if shell then 
    shell.start_terminal
else 
    print("connection failed")
end if
