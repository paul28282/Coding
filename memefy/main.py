import random

funnyString = input('Kirjoita tähän jotain: ')

def memefy(text):
    newText = ''
    for i in range(len(text)):
        r = random.randint(0,1)
        if r:
            newText += text[i].upper()
        else:
            newText += text[i]
    if len(text) > 13:
        newText = newText[0:len(newText) - 2]
        newText += '... ok boomer'
    return newText

print(memefy(funnyString))