<template>
    <div>
        <div class="container">
            <h1>{{ title.first }} <span class="font-important"> {{ title.secondary }}</span></h1>
        </div>





        <div class="bloc-Career">
            <div class="list-btn">
                <h2 class="font-important" :class="(showPro) ? 'active' : ''" @click="setShowProToTrue()">Professionelle</h2>
                <h2 class="font-important" :class="(showSchool) ? 'active' : ''" @click="setShowSchoolToTrue()">Scolaire</h2>
                <h2 class="font-important" :class="(showCertif) ? 'active' : ''" @click="setShowCertifToTrue()">Certification</h2>
            </div>

            <transition name="fade-career" mode="out-in" appear>
                <div id="Professionel" class="items" v-if="showPro">

                    <div class="item" v-for="(element, id) in tab_pro" :key="id">
                        <span class="date font-important">{{ element.date }}</span><br>

                        <div class="item-content" >
                            <span class="utilities"><a class="link" :href="element.enterprise_url" target="_blank">{{ element.enterprise }}</a> - {{ element.location }}</span><br>
                            <span class="role">{{ element.role }}</span> - {{ element.text_second }}<br>

                            <span class="works">Travaille effectué :</span>
                            <span v-if="element.desc != ''" class="description">
                                {{ element.desc }}
                            </span>
                            <ul class="list-works" v-if="Object.keys(element.list).length > 0">
                                <li v-for="(work, id) in element.list" :key="id">
                                    <a class="link" v-if="Object.keys(work).length == 2" :href="work.link" target="_blank">{{ work.text }}</a>
                                    <span v-else>{{ work }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="Scolaire" class="items" v-else-if="showSchool">
                    <div class="item" v-for="(element, id) in tab_school" :key="id">
                        <span class="date font-important">{{ element.date_start }} - {{ element.date_end }}</span><br>
                        
                        <div class="item-content" >
                            <span class="utilities"><a class="link" :href="element.school_url" target="_blank">{{ element.school_name }}</a> - {{ element.location }}</span><br>
                            <span class="role">{{ element.type }}</span><template v-if="element.mention != ''"> - {{ element.mention }}</template><br>

                            <span v-if="element.desc != ''" class="description">
                                {{ element.desc }}
                            </span>
                        </div>
                    </div>
                </div>

                <div id="Certification" class="items" v-else-if="showCertif">
                    <a class="item" v-for="(element, id) in tab_cert" :key="id" target="_blank" :href="element.certif_url">
                        <img :src="'/img/certif/' + element.certif + '.webp'">

                        <div class="item-content">
                            <span class="date font-important">{{ element.date }}</span>
                            <span class="utilites"><span class="font-important">{{ element.certif }}</span><span v-if="element.certif_score != ''">
                                - {{ element.certif_score }} points<span v-if="element.certif_score_max != ''"> sur {{ element.certif_score_max }}</span>
                                </span>
                            </span>
                            <span class="description" v-if="element.location != ''">Sur <u>{{ element.location }}</u></span>
                        </div>
                    </a>
                </div>
            </transition>
        </div>




    </div>
</template>





<script>
export default {
    methods: {
        setShowProToTrue(){
            this.title = { first: 'Mon parcours', secondary: 'Professionnel'}
            this.showPro    = true
            this.showSchool = false
            this.showCertif = false
        },
        setShowSchoolToTrue(){
            this.title = { first: 'Mon parcours', secondary: 'Scolaire'}
            this.showPro = false
            this.showSchool = true
            this.showCertif = false
        },
        setShowCertifToTrue(){
            this.title = { first: 'Mes', secondary: 'Certifications'}
            this.showPro = false
            this.showSchool = false
            this.showCertif = true
        },
    },
    data(){
        return {
            title : { first: 'Mon parcours', secondary: 'Professionnel'},
            showPro: true,
            showSchool: false,
            showCertif: false,

            tab_pro: [
                {
                    date: 'Janvier 2022',
                    enterprise: 'Association ADEAC',
                    enterprise_url: 'https://ascc-asso.org',
                    location: 'Nancy, FR',
                    role: 'Développeur Web',
                    text_second: 'Stage de BTS SIO seconde année',
                    list: {
                        1: 'Création d\'un site WordPress',
                        2: 'Relation client',
                    },
                    desc: ''
                }, {
                    date: 'Juin 2021',
                    enterprise: 'eZCorporation',
                    enterprise_url: 'https://ezcorp.io',
                    location: 'Distanciel',
                    role: 'Développeur Web',
                    text_second: 'Stage de BTS SIO première année',
                    list: {
                        1: 'Création de deux sites web',
                        2: { text: 'Mission 1 - eZHost', link: '/projects/stage/eZHost'},
                        3: { text: 'Mission 2 - eZHub', link: '/projects/stage/eZHub'}
                    },
                    desc: ''
                }, {
                    date: 'Décembre 2017',
                    enterprise: 'Cube Digital Média',
                    enterprise_url: 'https://www.iagona.com',
                    location: 'Maxéville, FR',
                    role: 'Technicien Support',
                    text_second: 'Stage de BAC Pro SN',
                    list: {
                        1: 'Réparation de matériel informatique',
                        2: 'Installation de borne informatique',
                        3: 'Installation d\'OS sur ordinateur',
                        4: 'Relation client'
                    },
                    desc: ''
                },
            ],



            tab_school: [
                {
                    date_start: '(Prévu) : 2022',
                    date_end: '2024',
                    school_name: 'Cégép Rivière du Loup',
                    school_url: 'https://www.cegeprdl.ca',
                    location: 'Rivière du Loup, QC',
                    type: 'DEC Informatique',
                    mention: '',
                    desc: ''
                }, {
                    date_start: '2020',
                    date_end: '(En cours)',
                    school_name: 'Lycée Frédéric Chopin',
                    school_url: 'http://www.lycee-chopin.fr',
                    location: 'Nancy, FR',
                    type: 'BTS SIO option SLAM',
                    mention: '',
                    desc: ''
                }, {
                    date_start: '2018',
                    date_end: '2020',
                    school_name: 'Lycée Pierre de Coubertin',
                    school_url: 'https://www.lyceecoubertin.fr',
                    location: 'Nancy, FR',
                    type: 'BAC STI2D option SIN',
                    mention: 'Mention bien',
                    desc: ''
                }, {
                    date_start: '2017',
                    date_end: '2018',
                    school_name: 'Lycée Pierre de Coubertin',
                    school_url: 'https://www.lyceecoubertin.fr',
                    location: 'Nancy, FR',
                    type: 'BAC pro SN',
                    mention: '',
                    desc: 'Réorienté après une année pour un BAC Technologique'
                },
            ],


            tab_cert: [
                {
                    date: 'Avril 2022',
                    certif: 'Pix',
                    certif_score: '582',
                    certif_score_max: '768',
                    certif_url: '/doc/certif/attestation-pix-20220406.pdf',
                    location: 'app.pix.fr'
                },
            ],
        }
    }
}
</script>





<style>
.bloc-Career{
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 1000px;
    margin: 30px auto 0px auto;
}

.list-btn{
    display: flex;
    flex-direction: column;
    gap: 15px;
}


.list-btn h2{
    display: flex;
    justify-content: flex-end;

    width: 250px;
    height: 79px;
    padding: 20px;


    background-color: var(--color-container-background);
    border-radius: 20px;
    border: 1px solid var(--color-text-important);
    
    cursor: pointer;
    transition: all .4s ease;
}
.list-btn h2:hover{
    color: hsl(210, 100%, 80%);
}

.list-btn h2.active{
    color: hsl(210, 100%, 90%);
    background-color: hsl(210, 100%, 20%);
}


.bloc-Career .items{
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 5px 10px;
}


.bloc-Career .items .item{
    font-size: 18px;

    width: 650px;
    padding: 15px 20px;
    border-left: 1px solid var(--color-text-important);
    border-bottom: 1px solid var(--color-text-important);
    
    background-color: var(--color-container-background);
}
.bloc-Career .items .item:first-child{
    border-top: 1px solid var(--color-text-important)
}
.date{
    font-size: 22px;
}

.link{
    font-weight: 500;
    color: hsl(210, 100%, 50%);
    text-decoration: none;
}
.link:hover{
    text-decoration: underline;
}

.role{
    font-weight: 600;
}


.item-content{
    margin-left: 40px;
}

.item-content ul{
    font-size: 17px;
    font-weight: 300;
    color: hsl(210, 15%, 70%)
}

.description{
    font-size: 17px;
    font-weight: 300;
    color: hsl(210, 15%, 70%)
}


#Certification .item {
    display: flex;
    width: 650px;
    margin-left:0px;
    border-top: 1px solid var(--color-text-important);

    transition: all .1s ease;
}
#Certification .item:hover{
    width: 645px;
    margin-left:5px;
}

#Certification .item img{
    width: 88px;
    height: 88px;

    border-radius: 100%;
}
#Certification .item .item-content{
    display: flex;
    justify-content: center;
    flex-direction: column;
}




.fade-career-enter-from,
.fade-career-leave-to{
    opacity: 0;
}

.fade-career-enter-active,
.fade-career-leave-active {
    transition: all 0.2s ease-out;
}

.fade-career-enter-from{
    transform: translateY(-50px);
}

.fade-career-leave-to{
    transform: translateY(50px);
}
</style>