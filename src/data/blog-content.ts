import Article from "./BlogPost";

const articleContents: Article[] = [
    {
        id: 1,
        key: "guide-to-yaml-files",
        date: "September 30, 2024",
        timeToRead: "5 min",
        title: "A Beginner's Guide to YAML Files",
        bannerImg: "/images/blog/yaml/yaml-banner.svg",
        highlightedPostImg: "/images/blog/yaml/yaml-highlight-post.svg",
        articlePostImg: "/images/blog/yaml/yaml-trending-post.svg",
        highlighted: true,
        trending: true,
        tags: ["yaml"],
        description: "This is a comprehensive introduction to YAML, designed for beginners. The article explains the basics of YAML syntax, including indentation rules, key-value pairs, lists, and nested structures.",
        content: `
YAML (YAML Ain't Markup Language) is a simple, human-readable data format used primarily for configuration files. 
It is designed to be easy to read and write while still being powerful enough to represent complex data structures. 
YAML is widely used in various fields, including software development, DevOps, cloud configuration, and even by popular 
applications like Docker, Kubernetes, and Ansible.

In this tutorial, we'll cover the basics of YAML, its syntax, and how you can use it in various scenarios.

### Why YAML?

YAML is often chosen over alternatives like JSON and XML for the following reasons:
 - *Readability:* YAML is easier to read and write due to its minimal syntax.
 - *Human-friendly:* It is highly intuitive for both developers and non-developers.
 - *Data structure support:* YAML supports complex data structures like maps, lists, and objects.

### YAML Syntax

 YAML uses indentation (spaces) to represent data structure, rather than brackets or tags as in JSON or XML. 
 Here are the basic syntax rules:
 1. *Whitespace Sensitivity:* Indentation must consist of spaces, not tabs. YAML is sensitive to indentation, so proper alignment 
 is essential.
 2. *Key-Value Pairs:* YAML represents data as key-value pairs, similar to a dictionary in Python or an object in JSON.
 3. *Lists:* Lists can be created using dashes (-).
 4. *Comments:* Comments are added using #.

#### Example YAML Structure

Here's a simple YAML configuration:
\`\`\`
name: John Doe
age: 30
address:
  street: 123 Main St
  city: New York
  postal_code: 10001
phone_numbers:
  - type: home
    number: "555-1234"
  - type: work
    number: "555-5678"
\`\`\`

#### Explanation:

 - *name* and *age* are simple key-value pairs.
 - *address* is a nested structure (a map) with its own key-value pairs.
 - *phone_numbers* is a list of maps (dictionaries) containing *type* and *number*.

### YAML Data Types

#### Strings

Strings in YAML can be written in plain text:
\`\`\`
message: Hello, World!
\`\`\`
Or enclosed in quotes (single or double):
\`\`\`
greeting: "Hello, World!"
note: 'YAML supports both single and double quotes.'
\`\`\`

#### Numbers

Numbers can be written as integers or floating points:
\`\`\`
age: 25
price: 19.99
\`\`\`

#### Booleans

Boolean values are represented as true or false:
\`\`\`
is_active: true
is_admin: false
\`\`\`

#### Null Values

Null values are written as null, ~, or simply omitted:
\`\`\`
nickname: null
middle_name: ~
optional_field:
\`\`\`

#### Lists

Lists can be written using dashes:
\`\`\`
fruits:
  - apple
  - banana
  - cherry
\`\`\`
Or written in a more compact inline form:
\`\`\`
fruits: [apple, banana, cherry]
\`\`\`

#### Maps (Dictionaries)

Maps are key-value pairs:
\`\`\`
person:
  first_name: John
  last_name: Doe
\`\`\`
You can also define inline maps:
\`\`\`
person: {first_name: John, last_name: Doe}
\`\`\`

### Special Characters in YAML

YAML uses special characters for specific purposes:

 - Colon (:) separates keys from values.
 - Dash (-) indicates a list item.
 - Pipe (|) for multiline strings that preserve line breaks.
 - Greater than sign (>) for multiline strings that fold into a single line.

### Multiline Strings

If you need to write a multiline string, YAML offers two ways:

 - Literal block style (|): Retains line breaks in the string.
\`\`\`
description: |
  This is a description
  that spans multiple lines.
\`\`\`

 - Folded block style (>): Collapses newlines into spaces.
\`\`\`
description: >
  This is a description
  that is folded into a single line.
\`\`\`

### Anchors and Aliases

YAML allows you to reuse values with anchors and aliases. This is useful when you have repeated values.
\`\`\`
base: &default
  environment: production
  version: 1.0

app1:
  <<: *default
  name: Application 1

app2:
  <<: *default
  name: Application 2
\`\`\`

In this example, app1 and app2 inherit values from the base block using the anchor *default.

### Using YAML in Different Applications

#### YAML in Docker Compose

Docker Compose uses YAML for defining and running multi-container Docker applications. Here's an example *docker-compose.yml*:
\`\`\`
version: '3'
services:
  web:
    image: nginx
    ports:
      - "8080:80"
  db:
    image: postgres
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
\`\`\`

#### YAML in Kubernetes

Kubernetes uses YAML for defining its resources, such as Pods, Services, and Deployments. Here’s an example of a Kubernetes 
Pod definition:
\`\`\`
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - name: nginx-container
    image: nginx
    ports:
    - containerPort: 80
\`\`\`

#### YAML in GitHub Actions

GitHub Actions uses YAML to define automation workflows. Here’s an example workflow file:
\`\`\`
name: CI Pipeline
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm install
      - run: npm test
\`\`\`

### Conclusion

YAML is a versatile, human-readable format for structuring data. Its simplicity makes it an excellent choice for configuration 
files across various domains, from cloud infrastructure to application development. By mastering YAML, you'll be better equipped 
to manage configurations in tools like Docker, Kubernetes, Ansible, and many more.

As you work with YAML, remember to follow proper indentation, and make use of its powerful features like anchors and aliases 
to simplify your configuration files.
    `
    }
];

export default articleContents;