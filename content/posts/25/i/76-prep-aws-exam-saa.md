+++
title = 'prep aws exam saa'
date = '2025-09-26T12:56:06+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = []
categories = []
url = '25i76'
+++

<!-- more -->

From a sample question for SAA-C03 [^aws_2022].

+ `01` Private subnet requires to download patches from internet.
  - Configure a NAT gateway in a public subnet.
  - Define a custom route table to the NAT gateway for intenat traffic.
  - Associate it with the private subnets for the application tier.
+ `02` To save cost for Amazon EC2 instances during a 2-week company shutdown.
  - Run the applications on EC2 instances enabled for hibernation.
  - Hibernate the instances before the 2-week company shutdown.
+ `03` Traffic direction to a standby EC2 instance if the application fails and becomes unreachable.
  - A secondary elastic network interface can be added to an EC2 instance.
  - While primary network interfaces cannot be detached from an instance, secondary network interfaces can be detached and attached to a different EC2 instance.
+ `04` A JavaScript script requirement in company users' webpage, that makes authenticated GET requests to the company’s Amazon S3 bucket.
  - Web browsers will block running a script that originates from a server with a domain name that is different from the webpage.
  - Amazon S3 can be configured with CORS to send HTTP headers that allow the script to run. 
+ `05` Encryption options for all data stored in the cloud encrypted at rest at all times
using encryption keys stored on premises.
  - Use server-side encryption with customer-provided encryption keys (SSE-C).
  - Use client-side encryption to provide at-rest encryption.
+ `06` Anticipation to temporary increases in demand at the end of each month that will cause the job to run over the time limit but as cost-effectively as possible. The job is uniterruptable.
  - Deploy On-Demand Instances during periods of high demand.
  - Spot Instances: least costly option, but not suitable for uinterruptable job.
  - On-Demand Instances: billed for the number of seconds they are running.
+ `07` EC2 instances write the votes to an Amazon RDS database, but unable to keep up with the requests from it. Solution for most efficient manner and without downtime.
  - Configure the front-end application to send votes to an Amazon Simple Queue Service (Amazon SQS) queue.
  - Provision worker instances to read the SQS queue and write the vote information to the database.
  - It is a decouple the ingestion of votes from the database to allow the voting system to continue processing votes without waiting for the database writes.
+ `08` A two-tier application architecture (public subnet: Amazon EC2
instances, private subnet: EC2 instance for the database). Both are in a single Availability Zone (AZ). Steps combination providing high availability for the architecture.
  - Create an Amazon EC2 Auto Scaling group and Application Load Balancer spanning multiple AZs for the web application instances.
  - Create new public and private subnets in the same VPC, each in a new AZ. Create an Amazon RDS Multi-AZ DB instance in the private subnets. Migrate the old database contents to the new DB instance.
  - VPC is Virtual Private Cloud.
+ `09`  The architecture uses Amazon EC2 Auto Scaling groups, and the application consistently takes 1 minute to initiate upon boot up before responding to user requests.
  - Configure an Auto Scaling step scaling policy with an EC2 instance warmup condition.
+ `10` Amazon Aurora Multi-AZ DB cluster deployment, database reads are causing high I/O and adding latency to the write requests. How to separate the read requests from the write requests?
  - Create an Aurora replica and modify the application to use the appropriate endpoints.
  - Read and write requests have different endpoints.
  - Application is required to be configured.


## refs
[^aws_2022]: Nadine McBride, "AWS Certified Solutions Architect - Associate (SAA-C03) Sample Exam Questions", AWS Training and Certification, 17 Feb 2022, url https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Sample-Questions_C03.pdf [20250926].
