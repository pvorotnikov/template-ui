# AWS CodeBuild / CodePipeline CI/CD recipe

## Guide

1. Set up your AWS account if you haven't done so already.
If you are using your root account, create a new user from the [IAM](https://console.aws.amazon.com/iam/home#/home) console.

1. Set up AWS CLI on your development environment. You will need it to create a CloudFormation stack from `template.yml`. Alternatively you can use the [AWS CloudFormation](https://console.aws.amazon.com/cloudformation/home) console for setting up the stack.

1. Create a new CloudFormation stack:
```bash
# to create stack
aws cloudformation create-stack --stack-name ui-staging --template-body file://template.yml

# to update existing stack
aws cloudformation update-stack --stack-name ui-staging --template-body file://template.yml
```
