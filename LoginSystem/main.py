import json
from tkinter import *


root = Tk()



def writeJson(data, filename = 'usernames.json'):
    with open(filename, 'w') as f:
        json.dump(data,f,indent=4)


def SignUp():
    with open('usernames.json') as json_file:
        data = json.load(json_file)
        temp = data["accounts"]

        
        usernameDom = Entry(root)
        usernameDom.pack()


        passwordDom = Entry(root)
        passwordDom.pack()

        

        def click():
            _username = usernameDom.get()
            _password = passwordDom.get()

            y = {"username": _username, "password" : _password}
            temp.append(y)

            writeJson(data)

        submit = Button(root,text = 'Submit',command=click)
        submit.pack()
                
            
           

        
        
        

    

def Login():
    isLogged = bool(False)
    with open('usernames.json') as json_file:
        data = json.load(json_file)

    usernameDom = Entry(root)
    usernameDom.pack()


    passwordDom = Entry(root)
    passwordDom.pack()


    def click():
        usrname = usernameDom.get()
        password = passwordDom.get()
        for _name in data["accounts"]:
            if _name["username"] == usrname and _name["password"] == password:
                print('Logged In')
                isLogged = bool(True)
            
        if isLogged == False:
            print('Wrong username or password')


    submit = Button(root,text = 'Submit',command=click)
    submit.pack()

            
        
LoginButton = Button(root, text = 'Log in', width = 30, height = 10, command= Login)
LoginButton.pack()
SignUpButton = Button(root, text = 'Sign up', width = 30, height = 10, command = SignUp)
SignUpButton.pack()

QuitButton = Button(root,text = 'Quit',width = 10, height = 3, command = root.destroy)
QuitButton.pack()

root.mainloop()


    