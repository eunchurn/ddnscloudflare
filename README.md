# Cloudflare DDNS

[![Actions Status](https://github.com/eunchurn/ddnscloudflare/workflows/Node%20CI/badge.svg)](https://github.com/eunchurn/ddnscloudflare/actions)

Making Dynamic DNS for Cloudflare API

## Configuration

Make file `.env` environment file and configure Cloudflare environment variables

```yml
ZONE=[Zone ID]
DNS_RECORDS=[DNS Records]
AUTH_KEY=[Auth KEY of Cloudflare]
AUTH_EMAIL=[Auth e-mail address]
TYPE=[DNS Record Type, A or CNAME]
NAME=[DNS Config name]
```
