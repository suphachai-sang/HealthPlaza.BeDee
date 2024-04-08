<h1> HealthPlaza.BeDee</h1>
<br/>
<br/>
<h2>Project NodeJs-BE </h2>
<br/>
1.Backend Developer Exam
ทำ REST API โดยใช้ Node JS (JavaScript หรือ TypeScript) สำหรับโปรแกรม To do list โดยห้ามเชื่อมต่อกับ database แล้วส่งงานผ่าน Github
<br/>
Run node server.js

## Get todos
```bash
curl --location 'http://localhost:3000/todos'
```

## Post todos
```bash
curl --location 'http://localhost:3000/todos' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Backend Test",
    "description": "This is Backend Test"
}'
```

## Update todos
```bash
curl --location --request PUT 'http://localhost:3000/todos/0' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Backend Test Updated",
    "description": "This is Backend Test : Updated"
}'
```


## Delete todos
```bash
curl --location --request DELETE 'http://localhost:3000/todos/0'
```

<br/>
<br/>
2.Technical Test
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"


Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:
* 1 <= strs.length <= 200
* 0 <= strs[i].length <= 200
* strs[i] consists of only lower-case English letters.

```bash
curl --location 'http://localhost:3000/findcommon' \
--header 'Content-Type: application/json' \
--data '{
    "strs": [
        "flower",
        "flz",
        "flow",
        "fla",
        "flight",
        "flabc"
    ]
}'
```

<br/>
<br/>
<h2> Project ReactNativeFE </h2>
Implement application by using React-native with Typescript with following requirement below.
<br/> Display 20 questions each question has 4 answer
<br/> Every application re-load or re-open will be random question and answer
<br/> Display to Leader board
<br/> publish on git repository

Run npx react-native start<br/>
Run npx react-native run-android