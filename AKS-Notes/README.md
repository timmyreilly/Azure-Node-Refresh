# Azure Kubernetes Service

Orchestration of containers

Microservices - the Bad Parts: 
- many components, many moving parts
- difficult to manage inter-communication
- difficult to acheive high resource utilization
- manual management can be difficult 

We need automation - automation, configuration, supervision, and error handling

Kubernetes - 
Enables developers to deploy the applicaiton
Enable ops team to automatically monitoring and rescheduiling those apps 
Supervise Kubernetes, not each container
Abstracts away the hardware infrastructre and exposes your whole datacenter as a single gigantic computational resource

# Containers 101

Namespaces offer isolation
Filesystems
Process Ids
User Ids 

The process will only see resources that are inside the same namespace

Different types of Namespaces: 
Mount (mnt)
Process ID (pid)
Network (net)
Inter-process communcation (ipc)
UTS
User ID (user) 

The UTS namespace determines what hostname and domain name the process running inside that namespace sees. 

Process 1 -- UTS 1 --> LocalHost:2
Process 2 -- UTS 2 --> LocalHost:1

Namespace offer isolation. 

Limit resource usage
Control Groups (cGroups) 
Linux Kernal Feature that limits the resource usage of a process (or a group of processes)
A process can't use more than the configured amount of CPU, memory, network bandwidth, and so on... (What about windows containers?)

Docker made containers portable... the whole os, libararies and application in one container. 
Simplifies packaging and its dependencies 
Consistent experience
Host isolation 


To distribute a VM Image: 
Installing an os into a vm 
install application inside Vm
Distribute the whole VM image 

Docker offers images as well
VMs provide a good level of abstraction that we mimic with Namespaces and Control Groups  and container images are much smaller in size as compared to VM images. 

Images
Registries 
Containers - created from image 

Workflow: 
Build image 
Push image
Pull the image from Registry
Run the binary in container 

Now let's get ourselves ready for 100000 of containers running. 

Master Node(s)
Worker Node(s)

It all starts with the developer
App Descriptor -> Master Node -> Cluster of Worker Nodes

Developer can specify which applications should be put together. 

Master Node(s) is the control plane
Heart and soul of Kubernetes 
API server, what we interact with
Controller that keeps track of containers
Scheduler that manages containers
etcd that holds configuration

Worker Node(s)
Run your applicaiton
Container Runtime (docker or rocket)
Kubelet - manages containers on your node, talks to API server
Kube Proxy - load balances between application components 

### Running an application in Kubernetes 

Steps
1. Package your application in to one or more containers
2. Push those images to an Image Registry
3. Post App Descriptor to the Kubernetes API server
4. Scheduler schedules containers on available Worker Nodes
5. Kubelet instructs Nodes to download Container IMages
6. Kubelet instructs Nodes to run the Containers

### Kubernetes Objects 

`kubectl` is a command line interface for running against kubernetes
`kubectl <operation> <object> <resource name> <optional flags>`

`kubectl get nodes`
`kubectl help`

Pods = smallest unit that kubernetes manages, a pod is made up of one or more containers and information associated with those containers, querying a pod returns a data structre that contains information about containers and its metadata 

All containers for a Pod will be run on the same Node
Any container running within a pod will share the node's network with any other containers in the same pod. 
Containers withing a Pod can share files through volumes, attached to the containers
A Pod has an explicit life cycle, and will always remain on the Node in which it was started. 

Namespaces = Pods are collected into namespaces, which are used to group pods. Namespaces can be used to provide quotas and limits around resource usage and have an impact on DNS names that Kubernetes created internal to the cluster, if no namespace is specified when interacting with Kubernetes through kubectl, the command assumes you are working with the default namespace, named 'default'

`kubectl get pods --all namespaces` 

Nodes = is a machine that is added to the Kubernetes cluster, the master node is the brain of kubernetes, while the worker nodes do the work

All the containers in a pod share the node's network
all nodes in a kubernetes cluster are expected to be connected to each other and share a private cluster-wide network 
kubernetes runs containers within a pod within this isolated network 

# AKS

AKS simplifies development and deployment, you could do it yourself. 
You can do it without container orcherstration expertise. 
VMs provided that you don't have to babysit. You don't have to worry about the Master node. 

Master Node(s) managed and *cost covered* by Microsoft 
Access to enterprise-grade features of Microsoft Azure
Reduces the complexity and operational overhead of managing a Kubernetes cluster by offloading much of that responsibility to Azure
Handle critical tasks like helth monitoring and maintenance for you. 






