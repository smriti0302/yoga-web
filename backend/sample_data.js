const { Institute } = require('./models/sql/Institute');
const { Permission } = require('./models/sql/Permission');
const { Plan } = require('./models/sql/Plan');
const { Role } = require('./models/sql/Role');
const { User } = require('./models/sql/User');

const institutes = [
    {
        id: 1,
        name: 'Institute 1',
        address1: '#192, 1st Main, 2nd Cross, 5th Phase',
        address2: 'JP Nagar, Bangalore',
        email: 'institute1@gmail.com',
    },
    {
        id: 2,
        name: 'Institute 2',
        address1: '#3838, 1st Main, 2nd Cross, 5th Phase',
        address2: 'Sarjapur, Bangalore',
        email: 'institute2@gmail.com',
    },
];

const roles = [
    {
        id: 1,
        name: 'ROOT',
    },
    {
        id: 2,
        name: 'INSTITUTE_OWNER',
    },
    {
        id: 3,
        name: 'INSTIUTE_ADMIN',
    },
    {
        id: 4,
        name: 'TEACHER',
    },
    {
        id: 5,
        name: 'STUDENT',
    },
];

const users = [
    {
        id: 1,
        role_id: 1,
        institute_id: null,
        username: 'root',
        name: 'Root',
        email: 'root@gmail.com',
        password:
            '$2b$10$vqa/9ysYiCwL4F6KOEe1k.LM//L/7OH9r8x6QMWgo58xAoz/XxJd6',
        is_google_login: false,
        last_login: null,
    },
    {
        id: 2,
        role_id: 2,
        institute_id: 1,
        username: 'ins1_owner',
        name: 'ins1_owner',
        email: 'ins1_owner@gmail.com',
        password:
            '$2b$10$vqa/9ysYiCwL4F6KOEe1k.LM//L/7OH9r8x6QMWgo58xAoz/XxJd6',
        is_google_login: false,
        last_login: null,
    },
    {
        id: 3,
        role_id: 3,
        institute_id: 1,
        username: 'ins1_admin',
        name: 'ins1_admin',
        email: 'ins1_admin@gmail.com',
        password:
            '$2b$10$vqa/9ysYiCwL4F6KOEe1k.LM//L/7OH9r8x6QMWgo58xAoz/XxJd6',
        is_google_login: false,
        last_login: null,
    },
    {
        id: 4,
        role_id: 4,
        institute_id: 1,
        username: 'ins1_teacher',
        name: 'ins1_teacher',
        email: 'ins1_teacher@gmail.com',
        password:
            '$2b$10$vqa/9ysYiCwL4F6KOEe1k.LM//L/7OH9r8x6QMWgo58xAoz/XxJd6',
        is_google_login: false,
        last_login: null,
    },
    {
        id: 5,
        role_id: 2,
        institute_id: 2,
        username: 'ins2_owner',
        name: 'ins2_owner',
        email: 'ins2_owner@gmail.com',
        password:
            '$2b$10$vqa/9ysYiCwL4F6KOEe1k.LM//L/7OH9r8x6QMWgo58xAoz/XxJd6',
        is_google_login: false,
        last_login: null,
    },
    {
        id: 6,
        role_id: 3,
        institute_id: 2,
        username: 'ins2_admin',
        name: 'ins2_admin',
        email: 'ins2_admin@gmail.com',
        password:
            '$2b$10$vqa/9ysYiCwL4F6KOEe1k.LM//L/7OH9r8x6QMWgo58xAoz/XxJd6',
        is_google_login: false,
        last_login: null,
    },
    {
        id: 7,
        role_id: 4,
        institute_id: 2,
        username: 'ins2_teacher',
        name: 'ins2_teacher',
        email: 'ins2_teacher@gmail.com',
        password:
            '$2b$10$vqa/9ysYiCwL4F6KOEe1k.LM//L/7OH9r8x6QMWgo58xAoz/XxJd6',
        is_google_login: false,
        last_login: null,
    },
    {
        id: 8,
        role_id: 5,
        institute_id: 1,
        username: 'student1',
        name: 'student1',
        email: 'student1@gmail.com',
        password:
            '$2b$10$vqa/9ysYiCwL4F6KOEe1k.LM//L/7OH9r8x6QMWgo58xAoz/XxJd6',
        is_google_login: false,
        last_login: null,
    },
    {
        id: 9,
        role_id: 5,
        institute_id: 2,
        username: 'student2',
        name: 'student2',
        email: 'student2@gmail.com',
        password:
            '$2b$10$vqa/9ysYiCwL4F6KOEe1k.LM//L/7OH9r8x6QMWgo58xAoz/XxJd6',
        is_google_login: false,
        last_login: null,
    },
];

const permissions = [];

const plans = [
    {
        id: 1,
        name: 'Fixed',
        has_basic_playlist: true,
        has_playlist_creation: false,
        playlist_creation_limit: 0,
        has_self_audio_upload: false,
        number_of_teachers: 5,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 2,
        name: 'Fixed',
        has_basic_playlist: true,
        has_playlist_creation: false,
        playlist_creation_limit: 0,
        has_self_audio_upload: false,
        number_of_teachers: 10,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 3,
        name: 'Fixed',
        has_basic_playlist: true,
        has_playlist_creation: false,
        playlist_creation_limit: 0,
        has_self_audio_upload: false,
        number_of_teachers: 15,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 4,
        name: 'Fixed',
        has_basic_playlist: true,
        has_playlist_creation: false,
        playlist_creation_limit: 0,
        has_self_audio_upload: false,
        number_of_teachers: 100000,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 5,
        name: 'Tailor Made',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 5,
        has_self_audio_upload: false,
        number_of_teachers: 5,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 6,
        name: 'Tailor Made',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 5,
        has_self_audio_upload: false,
        number_of_teachers: 10,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 7,
        name: 'Tailor Made',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 5,
        has_self_audio_upload: false,
        number_of_teachers: 15,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 8,
        name: 'Tailor Made',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 5,
        has_self_audio_upload: false,
        number_of_teachers: 100000,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 9,
        name: 'Tailor Made',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 10,
        has_self_audio_upload: false,
        number_of_teachers: 5,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 10,
        name: 'Tailor Made',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 10,
        has_self_audio_upload: false,
        number_of_teachers: 10,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 11,
        name: 'Tailor Made',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 10,
        has_self_audio_upload: false,
        number_of_teachers: 15,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 12,
        name: 'Tailor Made',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 10,
        has_self_audio_upload: false,
        number_of_teachers: 100000,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 13,
        name: 'Tailor Made',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 15,
        has_self_audio_upload: false,
        number_of_teachers: 5,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 14,
        name: 'Tailor Made',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 15,
        has_self_audio_upload: false,
        number_of_teachers: 10,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 15,
        name: 'Tailor Made',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 15,
        has_self_audio_upload: false,
        number_of_teachers: 15,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 16,
        name: 'Tailor Made',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 15,
        has_self_audio_upload: false,
        number_of_teachers: 100000,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 17,
        name: 'Tailor Made',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 1000000,
        has_self_audio_upload: false,
        number_of_teachers: 5,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 18,
        name: 'Tailor Made',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 1000000,
        has_self_audio_upload: false,
        number_of_teachers: 10,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 19,
        name: 'Tailor Made',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 1000000,
        has_self_audio_upload: false,
        number_of_teachers: 15,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 20,
        name: 'Tailor Made',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 1000000,
        has_self_audio_upload: false,
        number_of_teachers: 100000,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 21,
        name: 'Master Plan',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 5,
        has_self_audio_upload: true,
        number_of_teachers: 5,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 22,
        name: 'Master Plan',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 5,
        has_self_audio_upload: true,
        number_of_teachers: 10,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 23,
        name: 'Master Plan',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 5,
        has_self_audio_upload: true,
        number_of_teachers: 15,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 24,
        name: 'Master Plan',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 5,
        has_self_audio_upload: true,
        number_of_teachers: 100000,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 25,
        name: 'Master Plan',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 10,
        has_self_audio_upload: true,
        number_of_teachers: 5,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 26,
        name: 'Master Plan',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 10,
        has_self_audio_upload: true,
        number_of_teachers: 10,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 27,
        name: 'Master Plan',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 10,
        has_self_audio_upload: true,
        number_of_teachers: 15,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 28,
        name: 'Master Plan',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 10,
        has_self_audio_upload: true,
        number_of_teachers: 100000,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 29,
        name: 'Master Plan',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 15,
        has_self_audio_upload: true,
        number_of_teachers: 5,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 30,
        name: 'Master Plan',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 15,
        has_self_audio_upload: true,
        number_of_teachers: 10,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 31,
        name: 'Master Plan',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 15,
        has_self_audio_upload: true,
        number_of_teachers: 15,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 32,
        name: 'Master Plan',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 15,
        has_self_audio_upload: true,
        number_of_teachers: 100000,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 33,
        name: 'Master Plan',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 1000000,
        has_self_audio_upload: true,
        number_of_teachers: 5,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 34,
        name: 'Master Plan',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 1000000,
        has_self_audio_upload: true,
        number_of_teachers: 10,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 35,
        name: 'Master Plan',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 1000000,
        has_self_audio_upload: true,
        number_of_teachers: 15,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 36,
        name: 'Master Plan',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 1000000,
        has_self_audio_upload: true,
        number_of_teachers: 100000,
        plan_validity: 0,
        plan_user_type: 'institute',
    },
    {
        id: 37,
        name: 'Fixed Plan Student',
        has_basic_playlist: true,
        has_playlist_creation: false,
        playlist_creation_limit: 0,
        has_self_audio_upload: false,
        number_of_teachers: 0,
        plan_validity: 0,
        plan_user_type: 'student',
    },
    {
        id: 38,
        name: 'Tailor Made Plan Student',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 5,
        has_self_audio_upload: false,
        number_of_teachers: 0,
        plan_validity: 0,
        plan_user_type: 'student',
    },
    {
        id: 39,
        name: 'Tailor Made Plan Student',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 10,
        has_self_audio_upload: false,
        number_of_teachers: 0,
        plan_validity: 0,
        plan_user_type: 'student',
    },
    {
        id: 40,
        name: 'Tailor Made Plan Student',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 15,
        has_self_audio_upload: false,
        number_of_teachers: 0,
        plan_validity: 0,
        plan_user_type: 'student',
    },
    {
        id: 41,
        name: 'Tailor Made Plan Student',
        has_basic_playlist: true,
        has_playlist_creation: true,
        playlist_creation_limit: 1000000,
        has_self_audio_upload: false,
        number_of_teachers: 0,
        plan_validity: 0,
        plan_user_type: 'student',
    },
];

const bulkCreateSampleData = () => {
    Institute.bulkCreate(institutes)
        .then((res) => {
            console.log(
                `Institutes sample data inserted : ${institutes.length}/${res.length}`
            );
            Role.bulkCreate(roles)
                .then((res) => {
                    console.log(
                        `Roles sample data inserted : ${roles.length}/${res.length}`
                    );

                    User.bulkCreate(users)
                        .then((res) => {
                            console.log(
                                `Users sample data inserted : ${users.length}/${res.length}`
                            );
                            Permission.bulkCreate(permissions)
                                .then((res) => {
                                    console.log(
                                        `Permissions sample data inserted : ${permissions.length}/${res.length}`
                                    );
                                    Plan.bulkCreate(plans)
                                        .then((res) => {
                                            console.log(
                                                `Plans sample data inserted : ${plans.length}/${res.length}`
                                            );
                                        })
                                        .catch((err) => {
                                            console.error(
                                                'Error creating plans : ',
                                                err
                                            );
                                        });
                                })
                                .catch((err) => {
                                    console.error(
                                        'Error creating permissions : ',
                                        err
                                    );
                                });
                        })
                        .catch((err) => {
                            console.error('Error creating roles : ', err);
                        });
                })
                .catch((err) => {
                    console.error('Error creating users : ', err);
                });
        })
        .catch((err) => {
            console.error('Error creating institutes : ', err);
        });
};

module.exports = { bulkCreateSampleData };