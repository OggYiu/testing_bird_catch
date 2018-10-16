1. create a facebook app
2. make sure you gather premissions
3. create a page with your development account
4. get the page access token
5. use graph api with your access token:



                FB.api(
                    '/1946594448769686_1946597175436080/comments',
                    'POST',
                    {
                        access_token: 'EAAEi4SGCooQBANhrWZBvEyAITtFT3Axq7G0lbNSkal5ZB9E5zeTdfoKIhtpzeb7pNZBfZBavMKl75wZCXbb1iClaCHcZAxcwMFghCctEKuMlwXGahNI4rZAKpQfZBsBDMYsvQku6hVzZCv7ztZBncMv9YZCLhRWtfZAAGwiCOfuIwNwmDiiDCB98kIVKONIw1i7CITwJr43KFTv7uwZDZD',
                        message: 'post by app, time : ' + Date.now(),
                        attachment_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/280px-PNG_transparency_demonstration_1.png',
                    },
                    function(response) {
                    // Insert your code here
                        console.log(response);
                    }
                );