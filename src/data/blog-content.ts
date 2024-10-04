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
YAML is not a markup language, even though its expansion is *Yet Another Markup Language*. It is a simple, human-readable 
data format used primarily for configuration files. It is designed to be easy to read and write while still being powerful enough 
to represent complex data structures. YAML is widely used in various fields, including software development, DevOps, cloud 
configuration, and even by popular applications like Docker, Kubernetes, and Ansible.

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

 - *Colon (:)* separates keys from values.
 - *Dash (-)* indicates a list item.
 - *Pipe (|)* for multiline strings that preserve line breaks.
 - *Greater than sign (>)* for multiline strings that fold into a single line.

#### Multiline Strings

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

#### Anchors and Aliases

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
    },
    {
      id: 2,
      key: "openapi-generator-tutorial",
      date: "October 03, 2024",
      timeToRead: "3 min",
      title: "Getting Started with OpenAPI Generator for Implementing an OpenAPI Server",
      bannerImg: "",
      highlightedPostImg: "",
      articlePostImg: "",
      highlighted: true,
      trending: true,
      tags: ["OpenAPI"],
      description: "",
      content: `
### Overview of OpenAPI Generator

OpenAPI Generator can generate code from the OpenAPI specification. It can create server stubs, API documentation, configuration files and test cases based on the specification file. OpenAPI supports frameworks and programming languages. Java, C#, C++, PHP, Python are some of the main programming languages supported by OpenAPI Generator.

In this article, We'll learn how to setup a OpenAPI Server using OpenAPI Generator. It will be using Spring Boot framework and maven plugin of OpenAPI Generator for generating code.

### Create a Spring Boot

As the first step, create a Spring Boot application. You can use spring initializr to generate the codebase. Include Spring MVC dependency. We will need this as we are going to create a RESTful service.

### Configuring OpenAPI Generator plugin

To generate Java files from the specification file(which we will discuss in detail later in the article) in spring boot application we need to configure the OpenAPI Generator. 

Open the pom.xml file present in the root of the project. 

 - Add dependencies: Add the openapi-generator-maven-plugin dependency inside dependencies section. 7.8.0 is the latest version while writing this article.

\`\`\`
<dependency>
    <groupId>org.openapitools</groupId>
    <artifactId>openapi-generator-maven-plugin</artifactId>
    <version>7.8.0</version>
</dependency>
\`\`\`

 - Configure plugin: Add the plugin configuration in the build plugins section of the pom.xml
 
\`\`\`
<plugin>
      <groupId>org.openapitools</groupId>
      <artifactId>openapi-generator-maven-plugin</artifactId>
      <version>5.2.1</version>
      <executions>
        <execution>
          <goals>
            <goal>generate</goal>
          </goals>
          <configuration>
            <inputSpec>\${project.basedir}/src/main/resources/apispec.yml</inputSpec>
            <generatorName>java</generatorName>
            <outputDir>\${project.build.directory}/generated-sources/openapi</outputDir>
          </configuration>
        </execution>
      </executions>
    </plugin>
\`\`\`

### Create the OpenAPI Generator api specification file

This is the main art of the OpenAPI Generator. apispec.yml file specifies how what all classes need to be created and how those should be created. 

Structure of  apispec.yml

1. OpenAPI version: At the begining of the file you need to specify the OpenAPI version you are using.

openapi: 3.0.0


2. Info block: This section contains the metadata about the API, such as , Title, version and description.

info:
  title: OpenAPI Generator example
  version: 1.0.0
  description: This is an example server implemented using OpenAPI Generator


3. Servers: Here, we need to list the urls where the API is hosted. 

servers:
  - url: http://localhost:8080/api


4. Paths: This section describes all the available endpoints or paths in the API server.


paths:
  /users:
    get:
      summary: Get all users
      responses:
        '200':
          description: A list of users
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'


5. Components: Describes all the reusable components like data models (schemas), parameters, and responses(Body and Error objects).

components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string


Example apispec.yml

This is a example of an apispec.yml file:


openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
servers:
  - url: http://localhost:8080/api
paths:
  /users:
    get:
      summary: Get all users
      responses:
        '200':
          description: A list of users
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string


Add this file at the location specified in the pom.cml plugin at "/src/main/resources/" . Detailed explanation apispec.yml can be read <Link to="/apispec-explanation">here</Link>. 

Generating source code

Run the maven build command to generate the source code as per the apispec.yml file.

mvn clean compile

Check the generated sources folder for the automatically created by the build plugin. You can find it at "target/generated-sources/openapi".

Optional Steps

You can view the OpenAPI documentation using the swagger UI. you can follow these steps to enable swagger UI.

1. Adding swagger dependecies: Add the "springdoc-openapi-ui" dependecy in pom.xml.

<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-ui</artifactId>
    <version>1.8.0</version>
</dependency>


2. Enable OpenAPI Documentation: Add the "@OpenAPIDefinition" to enable the Swagger UI for the application.

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;

@SpringBootApplication
@OpenAPIDefinition
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}


3. Run the application: After making these configurations, start the spring boot application.

4. Access the swagger UI: Once the application is started, open any browser and in the search bar enter "http://localhost:8080/swagger-ui.html" to view the user friendly interface. 

Note: you can modify the Swagger UI path in application.properties by setting "springdoc.swagger-ui.path".

Conclusion

Using the apispec.yml file in spring boot application you can clearly define your API and easily generate the Java files. This will reduce the manual coding and documenting overhead. OpenAPI generator will create the documentaion and Java files based on the specification wil ensuring conistency across the application.
  `
  }
];

export default articleContents;
