export const config = {
  "postgress": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DATABASE,
    "host": process.env.POSTGRESS_HOST,
    "dialect": "postgres"
  },
  "aws": {
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
  },
  "jwt": {
    "secret": "lOMi_Znya4jkNgoR4v0hk5aiV6wpVXPjU7-JNdjJ3_LXPBKirk9npFgGiEh335g0TYwmNVblykw-DcUD-GBxuYItn2pV4x1OJ4HnemylU6IzP2hBNV0jFxJItAlnRaLo5mQewjQVnWqwo3blyElH5NktTCBXXbjtgZeUmseW0vk"
  }
}
