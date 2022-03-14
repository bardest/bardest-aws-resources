import { Construct } from 'constructs'
import {
    NestedStack,
    NestedStackProps,
    Tags,
    aws_ec2 as ec2,
    aws_dynamodb as dynamodb,
    aws_opensearchservice as opensearch
} from 'aws-cdk-lib'
import { openSearchDataNodeInstanceType } from '../constants'

interface DataNestedStackProps extends NestedStackProps {
    // kitCategoryTableName: string
    // kitTableName: string
    // searchDomainName: string
    // searchVpc: ec2.IVpc
}

export class DataNestedStack extends NestedStack {
    // readonly kitCategoryTable: dynamodb.Table
    // readonly kitTable: dynamodb.Table
    // readonly searchDomain: opensearch.Domain
    // readonly shoppingCartTable: dynamodb.Table

    constructor(scope: Construct, id: string, props: DataNestedStackProps) {
        super(scope, id, props)

        // this.kitCategoryTable = new dynamodb.Table(this, 'KitCategoryTable', {
        //     tableName: props.kitCategoryTableName,
        //     partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
        //     readCapacity: 1,
        //     writeCapacity: 1
        // })
        // Tags.of(this.kitCategoryTable).add('name', props.kitCategoryTableName)
        // Tags.of(this.kitCategoryTable).add('environment', process.env.ENVIRONMENT ?? '')

        // this.kitTable = new dynamodb.Table(this, 'KitTable', {
        //     tableName: props.kitTableName,
        //     partitionKey: { name: 'name', type: dynamodb.AttributeType.STRING },
        //     readCapacity: 1,
        //     writeCapacity: 1,
        //     stream: dynamodb.StreamViewType.NEW_IMAGE
        // })
        // Tags.of(this.kitCategoryTable).add('name', props.kitCategoryTableName)
        // Tags.of(this.kitCategoryTable).add('environment', process.env.ENVIRONMENT ?? '')

        // // OpenSearch
        // this.searchDomain = new opensearch.Domain(this, 'KitSearchDomain', {
        //     domainName: props.searchDomainName,
        //     version: opensearch.EngineVersion.OPENSEARCH_1_0,
        //     capacity: {
        //         dataNodes: 1,
        //         dataNodeInstanceType: openSearchDataNodeInstanceType
        //     },
        //     enableVersionUpgrade: true,
        //     vpc: props.searchVpc,
        //     vpcSubnets: [{
        //         subnetType: ec2.SubnetType.PRIVATE_ISOLATED
        //     }]
        // })
    }
}