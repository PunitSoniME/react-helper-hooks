## useSubdomain

### This hook will return the subdomain of the application from url

<br />

> Example

```jsx
 
import { useSubdomain } from '../../../.';

export default function SubdomainComponent() {
    //  Url example - https://blog.myblog.com
    //  blog    - subdomain
    //  myblog  - domain
    //  .com     - top level domain 

    //  In below example, 0 can be replace by the index of your subdomain index
    //  If your domain is like this, https://blog.myblog.com, and if you pass 0 as parameter,
    //  then it will return "blog"
    const subdomain = useSubdomain(0);

    return (
        <div>
            <span>
                Your application's sub domain is - <b><u>{subdomain}</u></b>
            </span>
        </div>
    )
}
```
