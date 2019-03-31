import csv
import json

tagsDict = {}

with open('data-clean.csv', newline='') as csvfile:
    rows = csv.DictReader(csvfile)

    for index, row in enumerate(rows):
        tagsString = row['tags']

        tagsArr = tagsString[1:len(tagsString)-1].replace(' ','').replace("'",'').split(',')
        for tag in tagsArr:
            # print(tag)
            if (tag in tagsDict):
                numOfOccurences = tagsDict[tag]
                tagsDict[tag] = numOfOccurences + 1
            else:
                tagsDict[tag] = 0

    sortedDict = {k: v for k, v in sorted(tagsDict.items(), key=lambda x: -x[1])}
    print(sortedDict)


        
        # for tag in tags:
            # currentTag = tagsDict[tag]
            # print(currentTag)

            # if (currentTag == ''):
            #     currentTag = 1
            # else:
            #     currentTag += 1

        

with open('tags.json', 'w') as fp:
    datadump = {
        "data": sortedDict
    }
    json.dump(datadump, fp)
