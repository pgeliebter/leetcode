# "Given two binary strings a and b, return their sum as a binary string."
# Example 1:

# Input: a = "11", b = "1"
# Output: "100"
# Example 2:

# Input: a = "1010", b = "1011"
# Output: "10101"


# this uses python methods for converting binary into integer and then adding them
# def binary(a, b):
#     return bin(int(a, 2) + int(b, 2))[2:]

# start with variable set to longer length and loop back through it
def binary(a, b):
    returnString = ''
    longerVar = ''
    if len(a) > len(b):
        longerVar = a
        shorterVar = b
    else:
        longerVar = b
        shorterVar = b
    i = len(longerVar)-1
    # print(longerVar, i)
    c = 0
    while c != 0 | i >= 0:
        print(c)
        d = c + int(longerVar[i]) + int(shorterVar[i])
        print(d)
        if 2 > d:
            c = 0
            returnString += str(d)
        elif d == 2:
            c = 0
            returnString += str(0)
        else:
            c = 1
            returnString += str(1)
        i -= 1
    return returnString


print(
    binary('100', '101'))
