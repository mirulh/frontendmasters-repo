# How to use hash and which is the best hash to use

## Take this command for example:

- echo password >> foo   // this will write the text password into foo file

## Hash function (MD5 / SHA1 / SHA256)

using these hash we can generate different type of hashes of the text password. Navigate to the directory where foo file is located

1) ./foo + MD5

command: openssl md5 foo 
output: MD5(foo)= 286755fad04869ca523320acce0dc6a4 

*Result*: It creates 32 character string, hash value. This hashing algorithm generated the same hash value every time no matter the location

2) ./foo + SHA1

command: openssl sha1 foo
output: SHA1(foo)= c8fed00eb2e87f1cee8e90ebbe870c190ac3848c 

*Result*: It creates a 40 character string, hash value. This hashing algorithm generated the same hash value every time no matter the location


3) ./foo + SHA256

command: openssl sha256 foo
output: SHA256(foo)= 6b3a55e0261b0304143f805a24924d0c1c44524821305f31d9277843b8a10f4e 

*Result*: It creates a 64 character string, hash value. This hashing algorithm generated the same hash value every time no matter the location



**FInal Verdict**: For general-purpose hashing, SHA-256 is widely accepted and considered secure. However, for specific cases, other algorithms might be more suitable depending on their unique properties and requirements.


## Hash application in real world: Validating file between sender and receiver

A sender and a receiver can validate the file that is sent between them by sharing the hash value of the file from the sender. If the sender's hash value is similar with
the receiver's end, then they will know that the file is not in any way being tampered with during the exchange. "What I send you is what you get"

reference > https://frontendmasters.com/courses/fullstack-v3/hashing-with-salt/