import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
    {
        id: "react-flux-building-applications",
        title: "Building Applications in React and Flux",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "5:08",
        category: "JavaScript"
    },
    {
        id: "clean-code",
        title: "Clean Code: Writing Code for Humans",
        watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
        authorId: "cory-house",
        length: "3:10",
        category: "Software Practices"
    },
    {
        id: "architecture",
        title: "Architecting Applications for the Real World",
        watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
        authorId: "cory-house",
        length: "2:52",
        category: "Software Architecture"
    },
    {
        id: "career-reboot-for-developer-mind",
        title: "Becoming an Outlier: Reprogramming the Developer Mind",
        watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
        authorId: "cory-house",
        length: "2:30",
        category: "Career"
    },
    {
        id: "web-components-shadow-dom",
        title: "Web Component Fundamentals",
        watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
        authorId: "cory-house",
        length: "5:10",
        category: "HTML5"
    },
    {
        id: "renovize-viagrand-hopeli",
        title: "Nulla duis consequat adipisicing ut minim laboris sunt ad voluptate reprehenderit occaecat.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "scott-allen",
        length: "9:13",
        category: "Software Architecture"
    },
    {
        id: "liquicom-tsunamia-kenegy",
        title: "Exercitation enim est qui eu fugiat id.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "2:10",
        category: "Software Architecture"
    },
    {
        id: "orbixtar-emtrak-zoxy",
        title: "Dolor non eiusmod cupidatat adipisicing exercitation ea.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "8:36",
        category: "Software Architecture"
    },
    {
        id: "isodrive-magnina-uni",
        title: "Laboris sit proident consectetur labore magna.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "3:22",
        category: "Software Architecture"
    },
    {
        id: "kangle-viagreat-manufact",
        title: "Lorem ex sint occaecat ex labore do sint voluptate in.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "7:47",
        category: "HTML5"
    },
    {
        id: "mondicil-comtext-zytrex",
        title: "In duis ut aliquip et.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "9:50",
        category: "Software Practices"
    },
    {
        id: "sunclipse-trollery-zilla",
        title: "Aliquip ullamco dolore exercitation ea.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "6:44",
        category: "Career"
    },
    {
        id: "nurplex-zensor-veraq",
        title: "Excepteur culpa quis esse Lorem consectetur duis elit ea minim Lorem.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "6:29",
        category: "HTML5"
    },
    {
        id: "nimon-cognicode-uxmox",
        title: "Ullamco ullamco cillum occaecat veniam laboris incididunt dolor deserunt.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "3:37",
        category: "Career"
    },
    {
        id: "portico-petigems-endipin",
        title: "Ad ex non nostrud duis laborum labore.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "6:58",
        category: "JavaScript"
    },
    {
        id: "xleen-zentix-buzzworks",
        title: "Aute anim culpa velit ipsum ut consectetur duis.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "scott-allen",
        length: "3:21",
        category: "Software Practices"
    },
    {
        id: "accupharm-bostonic-xth",
        title: "Sint sunt fugiat consequat cillum excepteur irure excepteur sunt cillum reprehenderit enim voluptate nostrud.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "5:43",
        category: "JavaScript"
    },
    {
        id: "zboo-nspire-acumentor",
        title: "Ex ea commodo nostrud eiusmod nulla.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "scott-allen",
        length: "2:60",
        category: "Software Practices"
    },
    {
        id: "interfind-insuron-cuizine",
        title: "Ad veniam nisi id veniam cupidatat nostrud nisi ut deserunt cupidatat do duis.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "9:49",
        category: "HTML5"
    },
    {
        id: "tropoli-squish-comtrail",
        title: "Lorem sit est eu esse.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "3:31",
        category: "JavaScript"
    },
    {
        id: "prowaste-hydrocom-pearlesex",
        title: "Nulla eiusmod cillum anim adipisicing laborum nostrud excepteur ea culpa pariatur ex aute ut.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "scott-allen",
        length: "8:21",
        category: "Software Practices"
    },
    {
        id: "sulfax-zaphire-harmoney",
        title: "Sunt tempor ea do voluptate anim anim esse sit et ut minim adipisicing ad.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "8:30",
        category: "HTML5"
    },
    {
        id: "sensate-neocent-mitroc",
        title: "Lorem deserunt elit aliqua cupidatat dolore dolore.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "4:51",
        category: "HTML5"
    },
    {
        id: "rockabye-datacator-deepends",
        title: "Minim elit sint pariatur occaecat magna ullamco do voluptate minim esse incididunt exercitation velit.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "3:13",
        category: "Software Architecture"
    },
    {
        id: "earthwax-locazone-quordate",
        title: "Culpa nulla id est voluptate in quis cillum mollit in aliqua dolor eu culpa.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "9:13",
        category: "Career"
    },
    {
        id: "quizka-zillar-exosis",
        title: "Labore consectetur duis fugiat in amet enim adipisicing sit.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "scott-allen",
        length: "8:35",
        category: "Software Practices"
    },
    {
        id: "buzzmaker-vortexaco-digial",
        title: "Do magna adipisicing do dolore eu qui eiusmod cupidatat fugiat in.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "scott-allen",
        length: "4:47",
        category: "Career"
    },
    {
        id: "freakin-quantasis-stockpost",
        title: "Mollit sint et eiusmod anim aliquip incididunt adipisicing elit sint excepteur pariatur eu excepteur.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "9:31",
        category: "Career"
    },
    {
        id: "norsul-sultraxin-liquidoc",
        title: "Ullamco minim sit incididunt nulla nulla consequat adipisicing anim in anim qui ex.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "scott-allen",
        length: "2:24",
        category: "Software Practices"
    },
    {
        id: "lyria-cytrex-utara",
        title: "Qui minim laboris adipisicing nulla quis exercitation.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "8:52",
        category: "JavaScript"
    },
    {
        id: "kidstock-codax-temorak",
        title: "Culpa magna ullamco ad enim.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "8:57",
        category: "Career"
    },
    {
        id: "zorromop-franscene-enthaze",
        title: "Enim cillum veniam incididunt adipisicing sint labore.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "5:15",
        category: "HTML5"
    },
    {
        id: "quonk-equicom-paprikut",
        title: "Id nisi sit eiusmod sunt velit amet aute anim.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "6:25",
        category: "Software Architecture"
    },
    {
        id: "zentime-organica-nexgene",
        title: "Reprehenderit consectetur velit proident sunt qui incididunt ad tempor excepteur aliqua occaecat id quis elit.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "5:15",
        category: "JavaScript"
    },
    {
        id: "comverges-gorganic-twiggery",
        title: "Consectetur et nisi ullamco pariatur officia eu.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "scott-allen",
        length: "4:49",
        category: "Software Practices"
    },
    {
        id: "centice-realmo-buzzness",
        title: "Aute incididunt cupidatat officia excepteur ipsum.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "scott-allen",
        length: "9:39",
        category: "Software Architecture"
    },
    {
        id: "slambda-candecor-geekology",
        title: "In ut ut voluptate laboris exercitation eu elit dolore consequat ex occaecat.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "scott-allen",
        length: "3:36",
        category: "JavaScript"
    },
    {
        id: "papricut-rubadub-tourmania",
        title: "Excepteur tempor amet deserunt sunt velit officia sint veniam magna veniam velit minim.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "scott-allen",
        length: "8:16",
        category: "JavaScript"
    },
    {
        id: "applideck-cinesanct-bitendrex",
        title: "Sunt anim dolore deserunt id excepteur qui quis fugiat proident deserunt.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "8:43",
        category: "HTML5"
    },
    {
        id: "slumberia-isopop-bisba",
        title: "Ut officia reprehenderit occaecat eiusmod.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "3:27",
        category: "JavaScript"
    },
    {
        id: "konnect-vetron-chorizon",
        title: "Enim esse adipisicing esse non deserunt nostrud veniam sit pariatur dolor cupidatat anim deserunt cillum.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "scott-allen",
        length: "9:30",
        category: "Career"
    },
    {
        id: "quarx-reversus-dognosis",
        title: "Anim aliquip sunt nostrud et reprehenderit aliqua veniam consequat.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "1:15",
        category: "JavaScript"
    },
    {
        id: "oceanica-vicon-flexigen",
        title: "Reprehenderit eu commodo Lorem magna adipisicing pariatur sit consectetur fugiat non.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "2:38",
        category: "HTML5"
    },
    {
        id: "kidgrease-mazuda-momentia",
        title: "Officia fugiat nostrud ut id ea eiusmod sunt velit labore in incididunt cillum.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "3:26",
        category: "HTML5"
    },
    {
        id: "bullzone-comstar-ramjob",
        title: "Laboris labore ut anim exercitation irure enim dolor sint est.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "scott-allen",
        length: "3:35",
        category: "Software Practices"
    },
    {
        id: "glasstep-greeker-realysis",
        title: "Proident amet qui eiusmod non ea nisi sint et cillum.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "1:35",
        category: "Software Practices"
    },
    {
        id: "pushcart-combogene-farmage",
        title: "Quis esse culpa ut incididunt ad culpa qui ad.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "scott-allen",
        length: "2:26",
        category: "JavaScript"
    },
    {
        id: "insectus-intradisk-polarax",
        title: "Magna non consectetur quis est Lorem labore elit commodo.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "scott-allen",
        length: "9:56",
        category: "Career"
    },
    {
        id: "idetica-zaj-zogak",
        title: "Velit culpa irure est labore ipsum ea non labore dolore dolore.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "7:46",
        category: "Software Architecture"
    },
    {
        id: "zappix-geeketron-techade",
        title: "Cupidatat dolor reprehenderit tempor consequat Lorem reprehenderit cillum proident excepteur eu pariatur.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "scott-allen",
        length: "8:40",
        category: "Software Architecture"
    },
    {
        id: "corpulse-futurize-prosure",
        title: "Sunt consectetur commodo non minim magna labore dolor cupidatat dolor voluptate est id officia.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "scott-allen",
        length: "1:58",
        category: "Career"
    },
    {
        id: "quinex-sentia-gink",
        title: "Ad eiusmod est cupidatat veniam quis voluptate exercitation adipisicing.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "scott-allen",
        length: "6:24",
        category: "Career"
    },
    {
        id: "gazak-zilladyne-zinca",
        title: "Mollit ad aliqua commodo consequat deserunt magna et voluptate aliquip est in adipisicing.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "9:31",
        category: "Career"
    },
    {
        id: "maroptic-comvene-toyletry",
        title: "Culpa proident ad labore esse nulla elit nulla voluptate fugiat.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "1:57",
        category: "Software Practices"
    },
    {
        id: "comtrek-qnekt-confrenzy",
        title: "Nulla culpa reprehenderit aliquip excepteur.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "5:17",
        category: "HTML5"
    },
    {
        id: "quilm-earbang-ohmnet",
        title: "Labore officia dolor irure adipisicing sunt incididunt nulla proident dolor.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "scott-allen",
        length: "2:54",
        category: "Software Practices"
    },
    {
        id: "earthpure-atomica-kaggle",
        title: "Enim laboris anim anim occaecat culpa proident elit Lorem labore.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "7:41",
        category: "Career"
    },
    {
        id: "zytrax-virva-qot",
        title: "Amet aliquip voluptate deserunt commodo consequat.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "2:34",
        category: "Software Architecture"
    },
    {
        id: "billmed-repetwire-elemantra",
        title: "Non aliqua eiusmod incididunt ex eiusmod incididunt minim sint amet nostrud eiusmod fugiat.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "5:10",
        category: "Software Architecture"
    },
    {
        id: "daido-waab-applidec",
        title: "Et fugiat ad laborum eiusmod sit ad in sit sit.",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "dan-wahlin",
        length: "2:20",
        category: "Software Architecture"
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
    return replaceAll(course.title, ' ', '-');
};

class CourseApi {
    static getAllCourses() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], courses));
            }, delay);
        });
    }

    static saveCourse(course) {
        course = Object.assign({}, course); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minCourseTitleLength = 1;
                if (course.title.length < minCourseTitleLength) {
                    reject(`Title must be at least ${minCourseTitleLength} characters.`);
                }

                if (course.id) {
                    const existingCourseIndex = courses.findIndex(a => a.id == course.id);
                    courses.splice(existingCourseIndex, 1, course);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    course.id = generateId(course);
                    course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
                    courses.push(course);
                }
                resolve(course);
            }, delay);
        });
    }

    static deleteCourse(courseId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //const indexOfCourseToDelete = courses.findIndex((a) => {
                //    a.id == courseId;
                //});
                resolve(courseId);
            }, delay);
        });
    }
}

export default CourseApi;
