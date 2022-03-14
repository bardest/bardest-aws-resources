#!/usr/bin/env node
import { App, Tags } from 'aws-cdk-lib';
import { BardestAwsResourcesStack } from '../lib/bardest-aws-resources-stack';
import { appNamingPrefix, environment } from '../lib/constants';

const app = new App();
const theStack = new BardestAwsResourcesStack(app, 'BardestAwsResourcesStack', {
    env: {
        region: process.env.CDK_DEFAULT_REGION
    }
})

// Add a tag to all constructs in the stack
Tags.of(theStack).add('application', appNamingPrefix)
Tags.of(theStack).add('environment', environment)
