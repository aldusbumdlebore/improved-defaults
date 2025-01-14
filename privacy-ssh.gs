// By aldusbumdlebore
// 05 / 20 / 2024
// Another version of ssh for streaming without revealing IP address and password.
// perfect for streaming
usage = function()
print("Usage: ssh [(opt) port]");
end function

print("Privacy SSH for streaming")
print("By aldusbumdlebore")

if params.len == 0 or params.len == null then port = 22
if params.len >= 2 then exit(usage)
if params.len == 1 then port = params[0].to_int
if typeof(port) != "number" then exit(usage)

user = user_input("Username: ")
ip = user_input("IP/WEB address: ", true)
if ip.matches("a-zA-Z.") then ip = nsloolup(ip)
if not ip.is_valid_ip then exit("Check the address and try again")
password = user_input("Password: " + char(0))
print("")
print("Connecting.....")
shell = get_shell.connect_service(ip, port, user, password, "ssh")
if typeof(shell) == "string" then exit(shell)
if shell then
shell.start_terminal
else
print("connection failed")
end if