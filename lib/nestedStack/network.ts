import { Construct } from 'constructs'
import { NestedStack, NestedStackProps, aws_ec2 as ec2 } from 'aws-cdk-lib'

interface NetworkNestedStackProps extends NestedStackProps { }

export class NetworkNestedStack extends NestedStack {
    readonly vpc: ec2.Vpc
    readonly rdsSecurityGroup: ec2.SecurityGroup

    // Constructor
    constructor(scope: Construct, id: string, props: NetworkNestedStackProps) {
        super(scope, id, props)

        this.vpc = new ec2.Vpc(this, 'Vpc', {
            maxAzs: 2,
            natGateways: 0,
            subnetConfiguration: [
                {
                    cidrMask: 24,
                    name: 'ingress',
                    subnetType: ec2.SubnetType.PUBLIC
                },
                // {
                //   cidrMask: 24,
                //   name: 'application',
                //   subnetType: SubnetType.PRIVATE
                // },
                {
                    cidrMask: 28,
                    name: 'rds',
                    subnetType: ec2.SubnetType.PRIVATE_ISOLATED
                }
            ]
        })
    }
}
