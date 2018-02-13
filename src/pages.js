import { _ } from 'core-js/library/web/timers';

const buildUrl = require('build-url');
var cuid = require('cuid');


function external_landing_page()
{
    var obj = {}; 
    obj.href = process.env.AUT_DOMAIN;
    return obj;
}

function login_page()
{
    var obj = {};
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: 'login'});
    obj.email_input_selector = '#email';
    obj.password_input_selector = '#password';
    obj.submit_button_selector = '#login-container > div > div > div > div > form > fieldset > button';

    obj.authenticate = async function(chromeless, email, password){
        await chromeless.goto(this.href)
        .type(email, this.email_input_selector)
        .type(password, this.password_input_selector)
        .click(this.submit_button_selector)
        .wait(internal_landing_page().settings_dropdown);
    }
    return obj;
}

function internal_landing_page()
{
    var obj = {}; 
    obj.settings_dropdown = "#settings-dropdown"
    obj.schedule_link = '#schedule';
    return obj;
}

function schedule_page()
{
    var obj = {}; 
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: 'account/schedule'});
    obj.past_deliveries = '#past-deliveries-tab';
    obj.delivery_history_container = '#delivery-history > div > div > div > p';
    obj.change_my_recipes_button = '#change-my-menu-btn';
    obj.cancel_change_my_recipies_link = '#cancelEditMode';
    obj.skip_delivery_button = '';
    return obj;
    
}

function history_page()
{
    var obj = {};
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: "history"});
    return obj;
}


function explore_page()
{
    var obj = {};
    obj.explore_tab = "#zine";
    obj.sun_times_tab = "#the-sun-times-tab";
    return obj;
}

function recipes_page()
{
    var obj = {};
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: "recipes"});
    obj.recipes_tab = "#recipes-tab";
    obj.featured_link = "#featured-recipe-link";
    return obj;
}

function video_page()
{
    var obj = {};
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: 'videos'});
    obj.video_tab = "#video-tab";
    obj.behind_the_scenes = "#page-content > div.container > div:nth-child(1) > div > h3";
    return obj;
}

function tips_page()
{
    var obj = {};
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: 'tips'});
    return obj;
}

function stories_page()
{
    var obj = {};
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: 'stories'});
    return obj;
}

function refer_a_friend_page()
{
    var obj = {};
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: 'refer-a-friend'});
    return obj;
}

function my_account_page()
{
    var obj = {};
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: 'my-account'});
    return obj;
}

function billing_history_page()
{
    var obj = {};
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: 'my-account#billing-history-section'});
    return obj;
}

function credits_and_coupons_page()
{
    var obj = {};
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: 'my-account#credits-section'});
    return obj;
}

function notifications_page()
{
    var obj = {};
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: 'my-account#alerts-section'});
    return obj;
}

function gift_page()
{
    var obj = {};
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: 'gift/select'});
    return obj;
}

function claim_page()
{
    var obj = {};
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: 'claim'});
    return obj;
}

function recycle_page()
{
    var obj = {};
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: 'recycle'});
    return obj;
}

function menu_page()
{
    var obj = {};
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: 'menu'});
    return obj;
}

function values_page()
{
    var obj = {};
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: 'values'});
    return obj;
}

function farms_page()
{
    var obj = {};
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: 'farms'});
    return obj;
}

function confirm_signup_page()
{
    var obj = {};
    obj.confirm_header = "#my-menu > div.menu-grid > div:nth-child(1) > div > div > h2";
    obj.confirm_signup_button_selector = "#saveMenuButton";
    return obj;
}

function pricing_page()
{
    var obj = {};
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: 'pricing'});
    return obj;
}

function customize_signup_page()
{
    var obj = {};
    obj.header = "#join-build-order > div > div.col-md-10.col-md-offset-1 > h2";
    obj.address1_selector = "#autocomplete";
    obj.state_selector = "#administrative_area_level_1";
    obj.zipcode_selector = "#postal_code";
    obj.continue_button_selector = "#submit-button";
    obj.populate_form = async function(chromeless, address1, city, state, zip, phone){
        await chromeless.type(address1, this.address1_selector);
        // FIX THIS - pass in local values
        await chromeless.evaluate(function() {
            document.querySelector("#locality").value = "Berkeley";
            document.querySelector("#phone").value = "5102224444";
        });
        await chromeless
        .type(state, this.state_selector)
        .type(zip, this.zipcode_selector);
        chromeless.click(this.continue_button_selector);
        await chromeless.wait(confirm_signup_page().confirm_signup_button_selector);
    }
    return obj;
}

function join_page()
{
    var obj = {};
    obj.href = buildUrl(process.env.AUT_DOMAIN, {path: 'join'});
    obj.firstname_selector = "#firstName";
    obj.lastname_selector = "#lastName";
    obj.email_selector = "#email";
    obj.password_selector = "#password";
    obj.zipcode_selector = "#zip";
    obj.continue_button_selector = "#userJoinForm > fieldset > div.row.hidden-xs > div > div > button";
    obj.random_email = function(){
        return "ci+sunbasketa"+cuid()+"@bloomcode.io";
    }
    obj.populate_form = async function(chromeless, firstname, lastname, email, password, zip){
        
        await chromeless.goto(this.href)
        .type(firstname, this.firstname_selector)
        .type(lastname, this.lastname_selector)
        .type(email, this.email_selector)
        .type(password, this.password_selector)
        .type(zip, this.zipcode_selector)
        .click(this.continue_button_selector);

        await chromeless.wait(customize_signup_page().header);
    }
    return obj;
}

function pay_page()
{
    var obj = {};
    obj.text = "Complete Your Order";
    obj.apply_free_shipping_button_selector = "#apply_promo";
    return obj;
}



module.exports = {
    external_landing_page: external_landing_page(),
    internal_landing_page: internal_landing_page(),
    login_page: login_page(),
    schedule_page: schedule_page(),
    history_page: history_page(),
    explore_page: explore_page(),
    recipes_page: recipes_page(),
    video_page: video_page(),
    tips_page: tips_page(),
    stories_page: stories_page(),
    refer_a_friend_page: refer_a_friend_page(),
    my_account_page: my_account_page(),
    billing_history_page: billing_history_page(),
    credits_and_coupons_page: credits_and_coupons_page(),
    notifications_page: notifications_page(),
    gift_page: gift_page(),
    claim_page: claim_page(),
    recycle_page: recycle_page(),
    menu_page: menu_page(),
    values_page: values_page(),
    farms_page: farms_page(),
    pricing_page: pricing_page(),
    join_page: join_page(),
    customize_signup_page: customize_signup_page(),
    confirm_signup_page: confirm_signup_page(),
    pay_page: pay_page()
}
