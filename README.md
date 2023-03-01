# Sandbox
different learning projects

## React from FreeCodeCamp
This files belong to the course from freecodecamp that's summed up in a youtube video.

In the pure beginning I faced the problem that React was being developed from [CDN links](https://reactjs.org/docs/cdn-links.html) and I wasn't able to render the files in explorer.
When I opened the local file in Chrome, the next error was printed in the DevTool extension:

*Access to file at 'relative path' from origin 'null' has been blocked by CORS policy: Cross origin request are only supported for protocol schemes: http, data, chrome, chrome-extensions, https.*

![image](https://user-images.githubusercontent.com/123627632/222245703-4fc81c58-d73d-4890-86db-a63b732e3095.png)

(Not exactly this one, I've search this from google)

The error is saying that the beginning of the relative path is wrong because Chrome only support requests that were said in error (http, etc.).
After doing some research, I realised that I was working in WSL and Chrome couldn't stand hosting from that.

I found a [video](https://www.youtube.com/watch?v=qGvEnjyAjPo&ab_channel=ChauTran) that explaining [how to allow file access from files in Chrome on Windows](https://chrome-allow-file-access-from-file.com/allow-file-access-from-files-on-windows/) (so it wouldn't care at all if I was working from WSL)

You have to open the command window in the relative path of your chome.exe, and then execute it with the flag  --allow-file-access-from-files, as it's shown in the image:

![image](https://user-images.githubusercontent.com/123627632/222249435-71fe711f-d880-41a1-a8dd-de1b24315112.png)

It is important to say that you have to find any instances of Chrome that are running, and force to quit them.

And that's all.

Now I can fully develop locally my little React's projects without having to building the whole thing everytime.
