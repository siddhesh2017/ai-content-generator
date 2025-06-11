export default[
    {
        name:'Blog Title',
        desc:'An AI tool that generates blog title depends on your blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/2800/2800015.png',
        aiPrompt:'Act like a professional blog writer. Suggest me 10 SEO-optimized ,creative, attention-grabbing blog titles in bullet points based on the keywords provided in begining .Do not explain anything just provide the titles.',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                lable:'Enter blog outline',
                field:'textarea',
                name:'outline'

            }
        ]
    },
    
        {
            name: 'Blog Content',
            desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
            category: 'blog',
            icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
            slug: 'blog-content-generation',
            aiPrompt: 'Act like a professional blog writer. Generate SEO friendly Blog Content based on keyword and outline provided in begining. The blog should be around 500 words, and be structured with an introduction, subheadings, and a conclusion. End with a proper summary.',
            form: [
                {
                    label: 'Enter your blog topic',
                    field: 'input',
                    name: 'topic',
                    required:true
                },
                {
                    label: 'Enter blog Outline here',
                    field: 'textarea',
                    name: 'outline'
                }
            ]
        },
        {
            name: 'Blog Topic Ideas',
            desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
            category: 'Blog',
            icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
            slug: 'blog-topic-idea',
            aiPrompt: 'Suggest top 10 viral worthy, trending blog topic ideas that are currently popular related to provided keywords  earlier . The topics should be relevant for audience of keyword provided earlier and based on recent trends from platforms like Google and social media. Keep the tone friendly and easy to understand.Dont give heading and summary',
            form: [
                {
                    label: 'Enter your Niche',
                    field: 'input',
                    name: 'niche',
                    required:true
                },
            ]
        },
        {
            name: 'Youtube SEO Title',
            desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
            category: 'Youtube Tools',
            icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
            slug: 'youtube-seo-title',
            aiPrompt: 'Generate top 10 SEO-optimized,viral worthy YouTube video titles for a video about keyword provided in begining, targeting relevant audience. The title should  be engaging and designed to increase CTR. Use a friendly tone. Keep each title under 70 characters if possible.',
            form: [
                {
                    label: 'Enter your youtube video topic keyowords',
                    field: 'input',
                    name: 'keywords',
                    required:true
                },
                {
                    label: 'Enter youtube description Outline here',
                    field: 'textarea',
                    name: 'outline'
                }
            ]
    
        },
        {

            name: 'Youtube Description',
            desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
            category: 'Youtube Tool',
            icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
            slug: 'youtube-description',
            aiPrompt: 'Write a compelling, SEO-optimized YouTube video description for a video based on YouTube SEO keywords and keyword provided earlier , aimed at relevant audience.Make it engaging and informative. Add a call to action encouraging viewers to Like Subscribe and support my youtube channel.Also add relevant hashtags, emojis and space for social media links ',
            form: [
                {
                    label: 'Enter your blog topic/title',
                    field: 'input',
                    name: 'topic',
                    required:true
                },
                {
                    label: 'Enter youtube Outline here',
                    field: 'textarea',
                    name: 'outline'
                }
            ]
        },
        {
            name: 'Youtube Tags',
            desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
            category: 'Youtube Tool',
            icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
            slug: 'youtube-tag',
    
            aiPrompt: 'Generate 15 SEO-friendly YouTube tags for a video based on keyword provided earlier, targeting relevant address to keyword. Include variations, long-tail keywords, and trending phrases related to keywords. Keep each tag short (1–4 words), relevant, and optimized for search,trendy.Make use of #',
    
            form: [
                {
                    label: 'Enter your youtube title',
                    field: 'input',
                    name: 'title',
                    required:true
                },
                {
                    label: 'Enter youtube video Outline here (Optional)',
                    field: 'textarea',
                    name: 'outline'
                }
            ]
        },
        // {
        //     name: 'Rewrite Article (Plagiarism Free)',
        //     desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
        //     icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        //     category: 'Rewriting Tool',
        //     slug: 'rewrite-article',
        //     aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
        //     form: [
        //         {
        //             label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
        //             field: 'textarea',
        //             name: 'article',
        //             required:true
        //         }
        //     ]
        // },
        // {
        //     name: 'Text Improver',
        //     desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
        //     icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        //     category: 'Writing Assistant',
        //     slug: 'text-improver',
        //     aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
        //     form: [
        //         {
        //             label: 'Enter text that you want to re-write or improve',
        //             field: 'textarea',
        //             name: 'textToImprove'
        //         }
        //     ]
        // },
        // {
        //     name: 'Add Emojis to Text',
        //     desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        //     icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        //     category: 'blog',
        //     slug: 'add-emoji-to-text',
        //     aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
        //     form: [
        //         {
        //             label: 'Enter your text to add emojis',
        //             field: 'textarea',
        //             name: 'outline',
        //             required:true
        //         }
        //     ]
        // },
        {
            name: 'Instagram Post Generator',
            desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
            icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
            category: 'blog',
           
            slug: 'instagram-post-generator',
            aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
            form: [
                {
                    label: 'Enter Keywords for your post',
                    field: 'input',
                    name: 'keywords',
                    required:true
                },
               
            ]
        },
        {
            name: 'Instagram Hash Tag Generator',
            desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
            icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
            category: 'blog',
           
            slug: 'instagram-hash-tag-generator',
            aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
            form: [
                {
                    label: 'Enter Keywords for your instagram hastag',
                    field: 'input',
                    name: 'keywords',
                    required:true
                },
               
            ]
        },
        {
            name: 'Instagram Post/Reel Idea',
            desc: 'An AI tool that generate New and trending instagram idea depends on your niche',
            icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
            category: 'instagram',
           
            slug: 'instagram-post-idea-generator',
            aiPrompt: 'Generate 5 creative and trending Instagram content ideas related to keyword provided earlier . The content should aim to either help user or entertain him based on keyword , be suitable for audience relevant to keyword, and have a friendly tone.Each idea should include:A content hook or caption idea ,A brief content description,A visual concept suggestion,(Optional) Relevant hashtag suggestions.Keep each idea concise, creative, and aligned with the latest Instagram engagement strategies.',
            form: [
                {
                    label: 'Enter Keywords / Niche for your instagram idea',
                    field: 'input',
                    name: 'keywords',
                    required:true
                },
               
            ]
        },
        {
            name: 'English Grammer Check',
            desc: 'AI Model to Correct your english grammer by providing the text',
            icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
            category: 'english',
           
            slug: 'english-grammer-checker',
            aiPrompt: 'You are an expert English grammar corrector.Analyze the provided text for grammatical, punctuation, spelling, and stylistic errors.Your response should follow this format:Original Sentence (with errors) – Highlight the mistakes clearly (bold or markdown), Corrected Sentence – Provide the corrected version,Explanation (if requested) – Briefly explain the changes made.',
            form: [
                {
                    label: 'Enter text to correct the grammer',
                    field: 'input',
                    name: 'inputText',
                    required:true
                },
               
            ]
        },
        {
            name: 'Write Code',
            desc: 'AI Model to generate programming code in any language',
            icon:'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
            category: 'Coding',
           
            slug: 'write-code',
            aiPrompt: 'You are an expert software developer. Generate clean, efficient, and well-commented code based on the user’s functionality description and specified programming language. Follow best practices, ensure the code is beginner-friendly, and include inline comments where helpful. Only return the final code block—no extra explanations. The user will provide the language, a brief task description, and any optional constraints in the begining. Use this to produce ready-to-run, properly formatted code.If the code is in cpp then use namespace s ',
            form: [
                {
                    label: 'Enter description of code you want along with Programming Lang',
                    field: 'textarea',
                    name: 'codeDesscripton',
                    required:true
                },
               
            ]
        },
        {
            name: 'Explain Code',
            desc: 'AI Model to explain programming code in any language',
            icon:'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
            category: 'Coding',
           
            slug: 'explain-code',
            aiPrompt: 'You are an expert programming tutor. Your task is to analyze the provided code and explain each unique concept the code has, what it does in simple, clear language. Break down the logic step by step, describe the purpose of functions, variables, loops, and conditions, aslo show  that particular part of code and highlight how the code flows. Use bullet points or paragraphs to make the explanation easy to understand, especially for beginners. Include the programming language name and assume the user may not be familiar with advanced concepts. Only focus on explaining the given code — do not modify it or provide alternative versions.',
            form: [
                {
                    label: 'Enter code which you want to understand',
                    field: 'textarea',
                    name: 'codeDesscripton',
                    required:true
                },
               
            ]
        },
        // {
        //     name: 'Code Bug Detector',
        //     desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
        //     icon:'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
        //     category: 'code-bug-detector',
           
        //     slug: 'code-bug-detector',
        //     aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
        //     form: [
        //         {
        //             label: 'Enter code which you want to test bug',
        //             field: 'textarea',
        //             name: 'codeInput',
        //             required:true
        //         },
               
        //     ]
        // },
        // {
        //     name: 'Tagline Generator',
        //     desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
        //     icon:'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
        //     category: 'Marketting',
           
        //     slug: 'tagline-generator',
        //     aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
        //     form: [
        //         {
        //             label: 'Product/Brand Name',
        //             field: 'input',
        //             name: 'productName',
        //             required:true
        //         },
        //         {
        //             label: 'What you are selling / Marketting',
        //             field: 'textarea',
        //             name: 'outline',
        //             required:true
        //         },
               
        //     ]
        // },
        {
            name: 'Cold- Email Generator',
            desc: 'Not sure how to write an effective cold email? Let our AI tool craft professional, personalized emails that get replies — tailored to your goals and audience.',
            icon:'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
            category: 'Email tool',
           
            slug: 'email-generator',
            aiPrompt: 'You are a professional email copywriter. Based on the details provided earlier, generate a cold email that is clear, persuasive, and tailored to the recipient. Follow best practices for cold outreach — keep it concise, personalized, and include a strong call-to-action. Keep the tone professional ',
            form: [
                {
                    label: 'Email Subject',
                    field: 'input',
                    name: 'emailSubject',
                    required:true
                },
                {
                    label: 'Offering Details',
                    field: 'textarea',
                    name: 'outline',
                    required:true
                },
               
            ]
        },
        {
            name: 'Product Description',
            desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
            icon:'https://cdn-icons-png.flaticon.com/128/679/679922.png',
            category: 'Marketting',
           
            slug: 'product-description',
            aiPrompt: 'You are a professional copywriter specializing in e-commerce content. Write a clear, engaging, and persuasive product description based on the provided product details. Highlight the key features, benefits, and unique selling points. Tailor the tone to match the target audience (e.g., friendly, professional, luxury, or playful) and optimize the description for SEO using relevant keywords if provided. Keep the content concise yet informative, encouraging customers to take action. Avoid technical jargon unless specified, and focus on how the product solves a problem or adds value. ',
            form: [
                {
                    label: 'Product Name',
                    field: 'input',
                    name: 'productName',
                    required:true
                },
                {
                    label: 'Product Details',
                    field: 'textarea',
                    name: 'outline',
                    required:true
                },
               
            ]
        },
    
]