import { Stack, StackProps } from 'aws-cdk-lib';
import { StorageNestedStack } from './nestedStack/storage'
import { NetworkNestedStack } from './nestedStack/network'
import { CognitoNestedStack } from './nestedStack/cognito'
import { DataNestedStack } from './nestedStack/data'
import { Construct } from 'constructs';
import { appNamingPrefix, environment } from './constants';

const userFuncName = `${appNamingPrefix}-${environment}-user`

export class BardestAwsResourcesStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const storageStack = new StorageNestedStack(this, 'StorageNestedStack', {
      metaFilesBucketName: `${appNamingPrefix}-meta-files`,
      userFilesBucketName: `${appNamingPrefix}-user-files`
    })

    const cognitoStack = new CognitoNestedStack(this, 'CognitoNestedStack', {
      userPoolName: `${appNamingPrefix}-${environment}-up`,
      userPoolClientName: `${appNamingPrefix}-${environment}-up-cl`,
      userPoolNativeClientName: `${appNamingPrefix}-${environment}-up-ncl`,
      defaultUserPoolGroupName: 'default-ug',
      adminUserPoolGroupName: 'admin-ug',
      identityPoolName: `${appNamingPrefix}-${environment}-ip`,
      userFilesBucketArn: storageStack.userFilesBucket.bucketArn
    })

    const networkStack = new NetworkNestedStack(this, 'NetworkNestedStack', {})

    const dataStack = new DataNestedStack(this, 'DataNestedStack', {
      // kitCategoryTableName: `${environment}.${appNamingPrefix}.kit_category`,
      // kitTableName: `${environment}.${appNamingPrefix}.kit`,
      // searchDomainName: `${environment}.${appNamingPrefix}-kit-search`,
      // searchVpc: networkStack.vpc,
    })
  }
}
