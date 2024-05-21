// By aldusbumdlebore
// 05 / 20 / 2024

// Another version of ssh for streaming without revealing IP address and password.
// perfect for streaming

usage = function()
    print("")
end function

// pre-alpha not suitable for use
// working on this section
// do not use

print("Privacy SSH for streaming")
print("By aldusbumdlebore")
print("")
user = user_input("Username: ")
ip = user_input("Ip address: ", true)
password = user_input("Password: ", true)
shell = get_shell.connect_service(ip, port, user, password, "ssh")
if typeof(shell) == "string" then exit(shell)
if shell then 
    shell.start_terminal
else 
    print("connection failed")
end if
