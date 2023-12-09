# How to create a server and connect to digital ocean

1) Navigate to digitalocean. Select + New Project

2) Fills the details. Select region closest to you ie. Singapore

3) Select operating system. Always select linux LTS for long term support

4) Select the plan

5) Add the SSH key public key (.pub) that you have created in .ssh directory

6) Name the server

7) Complete the process and your server is created


# How to create SSH key

1) navigate to .ssh directory. cd .ssh/

2) inside .ssh run: ssh-keygen

3) Name the file as something related to the server your are creating

4) You have created one public key and one private key

5) Your public key is the "name".pub file and private key is "name" file 


# Connect to the server

1) To access to your server your, a private key that is created along with the same public key is needed. So make sure that you have the correct one. For convenience, use the same name for your server and your key.

2) To access the intended server, go to your intended project and copy the project's server ip address

3) In the terminal, navigate to .ssh file and run this command

- ssh -i privateKey_file root@serverIPAddress

- eg: ssh -i myWebsite root@159.223.59.5

4) If all is right, you should be connected to your project server