<template>
    <div class="container">
        <div class="columns">
            <div class="column white-box">
                <div class="columns">
                    <div class="column is-3">
                        <img :src="profilePic" class="main-profile-image" />
                    </div>
                    <div class="column is-9">                        
                        <h1 class="title is-3">{{ firstName }} {{ lastName }}</h1>
                        <h2 class="subtitle is-4">{{ currentDesignation }} at <span class="current-company-name">{{ currentCompany }}</span></h2>
                        <ul class="personal-details">
                            <li><i class="fa fa-map-marker violet-marker" aria-hidden="true"></i> {{ location }}</li>
                            <li><i class="fa fa-map-marker violet-marker" aria-hidden="true"></i> {{ email }}</li>
                            <li><i class="fa fa-map-marker violet-marker" aria-hidden="true"></i> {{ website }}</li>
                            <li><i class="fa fa-map-marker violet-marker" aria-hidden="true"></i> {{ contact }}</li>
                        </ul>            
                    </div>
                </div>
            </div>
        </div>
        <div class="spacer-2"></div>
        <div class="columns white-box">
            <div class="column is-two-thirds">
                <p>{{ shortBio }}</p>
            </div>
            <div class="column violet-bg has-text-centered">
                <i class="fa fa-star"></i>
            </div>
            <div class="column green-bg has-text-centered">
                <i class="fa fa-envelope-o"></i>
            </div>
        </div>
        <div class="spacer-2"></div>
        <div class="columns">
            <div class="column is-two-thirds">
                <div class="white-box-padded">
                    <h2 class="title is-5">Key expertise</h2>                    
                    <div v-for="skill in keyExpertise" :key="skill.skillName">
                        <div class="skill-name">{{ skill.skillName }}</div>
                        <div class="skill-graph">
                            <progress :class="skill.identifier" :value="skill.proficiency" max="100">{{ skill.proficiency }}%</progress>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="white-box-padded">
                    <h2 class="title is-5 m-b-15">Other Skills</h2>
                    {{ otherSkills.join(", ") }}
                </div>
            </div>
        </div>
        <div class="spacer-2"></div>
        <div class="columns">
            <div class="column white-box">
                <h2 class="title is-5">Experience</h2>
                <ul class="experience-list">
                    <li v-for="experience in experiences" :key="experience.joinDate">
                        <div class="columns">
                            <div class="column is-1 has-text-right">
                                <img class="company-logo" :src="experience.companyLogo" />
                            </div>
                            <div class="column is-11">
                                {{ experience.designation }} at {{ experience.company }}
                                <div class="is-pulled-right">{{ experience.joinDate }} - {{ experience.releaseDate }}</div>
                                <p>{{ experience.jobDetail }}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="spacer-2"></div>
        <div class="columns">
            <div class="column white-box">
                <h2 class="title is-5">Education</h2>
                <ul class="experience-list">
                    <li v-for="education in educations" :key="education.startDate">
                        <div class="columns">
                            <div class="column is-1 has-text-right">
                                <img class="company-logo" :src="education.schoolLogo" />
                            </div>
                            <div class="column is-11">
                                {{ education.schoolName }}, {{ education.courseName }}
                                <div class="is-pulled-right">{{ education.startDate }} - {{ education.endDate }}</div>
                                <p>{{ education.educationDetail }}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="spacer-2"></div>
        <div class="columns">
            <div class="column white-box">
                <h2 class="title is-5">Projects</h2>
                <div class="columns">
                    <div class="column">                        
                        <ul>
                            <li v-for="project in projects" :key="project.projectName">
                                <div :class="project.colorClass">{{ project.projectName }}</div>
                            </li>
                        </ul>                
                    </div>
                    <div class="column is-1 has-text-left">
                        <div class="add-projects">
                            <i class="fa fa-plus-circle"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="spacer"></div>
    </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
	"firstName": "Jane",
	"lastName": "Stevens",
    "profilePic": "./static/profile-pic.jpg",
	"currentDesignation": "Graphic Designer",
	"currentCompany": "Knowork",
	"location": "Amsterdam, NL",
	"website": "www.knowork,com",
	"email": "jane@knowork.com",
	"contact": "+31628370493",
	"shortBio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed posuere sem, vel vulputate libero. Morbi vitae eros sed nisi fermentum aliquet in eu velit. Vestibulum quis semper justo, quis lobortis nulla. Etiam risus metus, varius in ornare vitae, feugiat condimentum erat. Pellentesque pellentesque felis metus, eget fermentum mauris sodales.",
	"keyExpertise": [
		{
			"skillName": "Adobe Indesign",
			"proficiency": 80,
            "identifier": "progress is-primary"
		},
		{
			"skillName": "Growth hacking",
			"proficiency": 85,
            "identifier": "progress is-danger"
		},
		{
			"skillName": "Crypto mining",
			"proficiency": 75,
            "identifier": "progress is-info"
		},
		{
			"skillName": "Adobe Illustrator",
			"proficiency": 95,
            "identifier": "progress is-warning"
		}
	],
	"otherSkills": ["Adode XD", "Blockchain", "logo design", "web design", "Sketch", "basketball", "branding", "sales", "marketing", "SEO", "cold calling", "Microsof Word"],
	"experiences": [
		{
			"designation": "Graphic Designer",
			"company": "Creative Studios",
			"joinDate": "01 June 15",
			"releaseDate": "12 Dec 17",
			"companyLogo": "./static/logo1.jpg",
            "jobDetail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia velit vel gravida malesuada. Proin ultricies odio mi, quis semper nisi egestas quis. Nulla eros sapien, placerat non diam nec, posuere vehicula tellus. Mauris dapibus mi eget enim ultrices egestas. Duis commodo sollicitudin sodales."
		},
		{
			"designation": "Creative Director",
			"company": "Designia",
			"joinDate": "30 Sep 10",
			"releaseDate": "14 May 15",
			"companyLogo": "./static/logo2.jpg",
            "jobDetail": "Duis eget arcu dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut id pellentesque odio. Nullam in posuere magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ornare quis lorem maximus efficitur. Nunc eget fermentum enim. Quisque dui eros, placerat quis elementum sit amet, rutrum vel felis."
        }
	],
	"educations": [
		{
			"courseName": "MBA Innovation Design",
			"schoolName": "MIT",
			"startDate": "01 June 15",
			"endDate": "12 Dec 17",
			"schoolLogo": "./static/logo1.jpg",
            "educationDetail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia velit vel gravida malesuada. Proin ultricies odio mi, quis semper nisi egestas quis. Nulla eros sapien, placerat non diam nec, posuere vehicula tellus. Mauris dapibus mi eget enim ultrices egestas. Duis commodo sollicitudin sodales."
		},
		{
			"courseName": "Certificate in FinTech",
			"schoolName": "Udacity",
			"startDate": "30 Sep 10",
			"endDate": "14 May 15",
			"schoolLogo": "./static/logo2.jpg",
            "educationDetail": "Duis eget arcu dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut id pellentesque odio. Nullam in posuere magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ornare quis lorem maximus efficitur. Nunc eget fermentum enim. Quisque dui eros, placerat quis elementum sit amet, rutrum vel felis."
        }
	],
	"projects": [
		{
			"projectName": "Project 01",
            "colorClass": "project-box grey"
		},
		{
			"projectName": "Project 02",
            "colorClass": "project-box blue"
		},
		{
			"projectName": "Project 03",
            "colorClass": "project-box green"
		},
		{
			"projectName": "Project 04",
            "colorClass": "project-box purple"
		},
		{
			"projectName": "Project 05",
            "colorClass": "project-box grey"
		}
	]
}
  }
}
</script>

<style scoped>
.white-box, .white-box-padded {
  background: #fff;
}
.white-box-padded {
    padding: 1rem;
}
.spacer {
  height: 3rem;
}
.spacer-2 {
  height: 2rem;
}
.violet-bg {
    background: #918ffa;
}
.green-bg {
    background: #79eb72;
}
.violet-bg i, .green-bg i {
    color: #fff;
    font-size: 2rem;
    margin-top: 1em;
}
ul.personal-details {
    width: 355px;
}
ul.personal-details li {
    width: 155px;
}
.current-company-name, .violet-marker {
    color: #807bef;
}
.main-profile-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
.skill-name, .skill-graph {
    display: inline-block;
    width: 8rem;
}
@media screen and (min-width: 1024px) {
    .skill-graph {
        width: 37rem;
    }
}
.m-b-15 {
    margin-bottom: 1.5rem;
}
ul.experience-list li {
    display: block;
}
.project-box {
    height: 150px;
    width: 175px;
    border-radius: 5px;
}
.grey {
    background: #d3d9f1;
}
.blue {
    background: #ccf1df;
}
.green {
    background: #eaf8a9;
}
.purple {
    background: #e6c1ec;
}
.add-projects {
    height: 150px;
    display: inline-block;
}
.add-projects i {
    font-size: 3rem;
    color: #7573f8;    
}
.company-logo {
    width: 48px;
    height: 48px;
}
</style>
