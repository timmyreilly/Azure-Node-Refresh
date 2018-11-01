# Terraform 

"Automated Infrastructure"
What's the scenario? 
Terraform: "Hello Wlrd" 

Automating Infrastructure Deployment
- Provisioning Resources
- Planning Updates 
- Using Source Control
- Reusing Templates

Oooh automating Infrastructure
Executable compiled into golang
Very portable and easy to install
Chocolately can install and invoke from any command line. 

"Terraform File"
"Terraform State File"
"Terraform Preferences"

```
# Variables: 

variable "aws_access_key" {} 
variable "aws_secret_key" {}

# Provider: 

provider "aws" {
    access_key = "access_key"
    secret_key = "secret_key"
    region = "us-east-1"
}
```
```
# Resource 
resource "aws_instance" "ex" {
    ami = "ami-c4"
    instance_type = "t2.micro"
}

# Output

output "aws_public_ip" {
    value = "${aws_instance.ex.public_dns}
}
```

### Demo: 
Prereq: 
AWS Account - free trial
Terraform Software (terraform.io)
Demo files: `moduleone.tf` 


```
PS > terraform plan 
PS > terraform apply
PS > terraform destroy 


```

## Updating Your Configuration with More Resources

Terraform State 
- JSON Format (do not touch)
- Resources, mappings, and metadata
- Locking
- Local / remote 

Terraform Planing
- Inspect State
- Dependency Graph
- Additions and deletions
- Walk the line - do! 

TF Lock file so multiple people don't try to apply the same state. 


