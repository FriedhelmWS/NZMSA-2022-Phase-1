from pprint import pprint  # for printing data structures in a prettier way

transmissions = []
with open("transmissions.csv") as file:
    for line in file:
        line = line.strip()
        transmissions.append(line.split(","))

transmissions.pop(0)
ids = [row[0] for row in transmissions]
transmissions = [row[1] for row in transmissions]
result = []
for transmission in transmissions:
    current_sum = 0
    for char in transmission:
        try:
            current_sum += int(char)
        except:
            continue
    result.append(current_sum)

freq_dict = {int(ids[i]): result[i] for i in range(len(ids))}
freq_tuples = sorted(freq_dict.items())
message = ""
for item in freq_tuples:
    message += chr(item[1])
print(message)
