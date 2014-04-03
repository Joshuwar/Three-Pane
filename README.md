CTRLio static site
==================

Requirements:

* node.js

To install:

    git clone https://github.com/CTRLio/staticsite.git
    cd staticsite
    npm install -g gulp
    npm install

After any edits, build the site:

    gulp

To have the site build automatically after any edits:

    gulp watch

Automatic deployment with Wercker
---------------------------------

To deploy this site to staging and production we are using [Werkcer](http://wercker.com). The following git commands will trigger a build of the site and a deployment to Amazon S3.

Staging: `git push origin master`  
Production: `git push origin production`

Wercker is set up with deployment targets for staging and production (see below) with the access key and secret key of the AWS account, along with the URL of the S3 bucket e.g. `URL: s3://staging.ctrlio.com` (where the URL is the name of a bucket).

Note about GitHub access: This requires that the 'werckerbot' GitHub user be given access to the repository, so a team has been created with werckerbot in it and given read access to this repository.

Note about local usage of tiddlywiki: normally TiddlyWiki is installed globally, but Wercker has a problem with installing npm modules globally so we are using a locally installed tiddlywiki binary - this seems to work.

Hosting on Amazon S3
--------------------

Amazon S3 provides static hosting.

Staging: http://staging.ctrlio.com  
Production: http://new.ctrlio.com

The staging bucket is called "staging.ctrlio.com" and the production bucket is called "new.ctrlio.com".

The S3 buckets have to be given a specific access policy to allow anonymous visitors to access the content e.g. for the staging bucket:

    {
    	"Version": "2008-10-17",
    	"Id": "Policy1394113051795",
    	"Statement": [
    		{
    			"Sid": "Stmt1394113046991",
    			"Effect": "Allow",
    			"Principal": {
    				"AWS": "*"
    			},
    			"Action": "s3:GetObject",
    			"Resource": "arn:aws:s3:::staging.ctrlio.com/*"
    		}
    	]
    }

Content distribution network via Amazon CloudFront
--------------------------------------------------

TBD.

DNS changes
-----------

Added a CNAME to ctrlio.com to point to staging.ctrlio.com.s3-website-eu-west-1.amazonaws.com. When the root domain is to be switched over, we will need to move to use Amazon's Route53 service to host the DNS.