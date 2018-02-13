import test from "ava";
import {Chromeless} from "chromeless";
const pages = require('./pages.js');
const personas = require('./personas.js');


/**
 * Process the browser's state with any and all checkers which are
 * registered with the system.
 * 
 * @param {Object} chromeless - the active browser
 */
async function checkpoint(t) {

    var log_list = [];

    // Screenshot testing is turned on by default
    // All possible verification types can be managed by env vars later on.
    const SCREENSHOT_CHECKER = true;
    const SECURITY_CHECKER = false;
    const PERFORMANCE_CHECKER = false;
    const ACCESSIBILITY_CHECKER = false;
    const LOCALIZATION_CHECKER = false;

    if (SCREENSHOT_CHECKER){
        const screenshot = await t.context.chromeless.screenshot(null, { s3ObjectKeyPrefixOverride: t.title + "-" });
        log_list.push(" screenshot location: " + screenshot);
    }
    if (SECURITY_CHECKER){}
    if (PERFORMANCE_CHECKER){}
    if (ACCESSIBILITY_CHECKER){}
    if (LOCALIZATION_CHECKER){} 
    
    return log_list;
};

/**
 * Prepare a unique browser instance for each test in the correct setting, either local or remote.
 */
test.beforeEach(t => {
    var flag = "" + process.env.REMOTE === "true";
    const chromeless = new Chromeless({
      remote: flag
    });
    t.context.chromeless = chromeless;
});

/**
 * Close the chromeless instance after each test regardless of test outcome.
 */
test.afterEach.always(t => {
    t.context.chromeless.end();
});


/**
 * Test the external landing page.
 */
test("external_landing", async t => {

    await t.context.chromeless.goto(pages.external_landing_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});



/**
 * Test the external login page.
 */
test("external_login", async t => {

    await t.context.chromeless.goto(pages.login_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});


/**
 * Test internal landing page (after customer has authenticated).
 */
test("internal_landing", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});


/**
 * Test sunbasket upcoming schedule page.
 */
test("sunbasket_schedule_upcoming", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password);
    await t.context.chromeless.goto(pages.schedule_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});


/**
 * Test sunbasket history page.
 */
test("sunbasket_history", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password);
    await t.context.chromeless.goto(pages.history_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});


/**
 * Test 'The Sun Times' view.
 */
test("sun_times", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password)
    await t.context.chromeless.click(pages.explore_page.explore_tab);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});

/**
 * Test the Recipes view.
 */
test("sunbasket_recipes", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password)
    await t.context.chromeless.goto(pages.recipes_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});

/**
 * Test the videos view.
 */
test("sunbasket_videos", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password)
    await t.context.chromeless.goto(pages.video_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});

/**
 * Test the tips view.
 */
test("sunbasket_tips", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password)
    await t.context.chromeless.goto(pages.tips_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});

/**
 * Test the stories view.
 */
test("sunbasket_stories", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password)
    await t.context.chromeless.goto(pages.stories_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});

/**
 * Test the refer-a-friend view.
 */
test("refer_a_friend", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password)
    await t.context.chromeless.goto(pages.refer_a_friend_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});

/**
 * Test the my-account view.
 */
test("my_account", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password)
    await t.context.chromeless.goto(pages.my_account_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});

/**
 * Test the billing history view.
 */
test("billing_history", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password)
    await t.context.chromeless.goto(pages.billing_history_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});

/**
 * Test the credits and coupons view.
 */
test("credits_and_coupons", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password)
    await t.context.chromeless.goto(pages.credits_and_coupons_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});

/**
 * Test the notifications view.
 */
test("notifications", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password)
    await t.context.chromeless.goto(pages.notifications_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});

/**
 * Test the gifts view.
 */
test("gifts", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password)
    await t.context.chromeless.goto(pages.gift_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});

/**
 * Test the claim view.
 */
test("claim", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password)
    await t.context.chromeless.goto(pages.claim_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});

/**
 * Test the recycle view.
 */
test("recycle", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password)
    await t.context.chromeless.goto(pages.recycle_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});


/**
 * Test the menu view.
 */
test("menu", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password)
    await t.context.chromeless.goto(pages.menu_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});

/**
 * Test the values view.
 */
test("values", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password)
    await t.context.chromeless.goto(pages.values_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});

/**
 * Test the farms view.
 */
test("farms", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password)
    await t.context.chromeless.goto(pages.farms_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});

/**
 * Test the pricing view.
 */
test("pricing", async t => {

    await pages.login_page.authenticate(t.context.chromeless, personas.persona_a.email, personas.persona_a.password)
    await t.context.chromeless.goto(pages.pricing_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});

/**
 * Test the join view in the sign up flow.
 */
test("join", async t => {

    await t.context.chromeless.goto(pages.join_page.href);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});

/**
 * Test the customize view in the sign up flow.
 */
test("customize", async t => {

    await pages.join_page.populate_form(
        t.context.chromeless, 
        personas.persona_a.first_name, 
        personas.persona_a.last_name,
        pages.join_page.random_email(), 
        personas.persona_a.password,
        personas.persona_a.zip);
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});

/**
 * Test the confirm view in the sign up flow.
 */
test("confirm", async t => {

    await pages.join_page.populate_form(
        t.context.chromeless, 
        personas.persona_a.first_name, 
        personas.persona_a.last_name,
        pages.join_page.random_email(), 
        personas.persona_a.password,
        personas.persona_a.zip);
    await pages.customize_signup_page.populate_form(
        t.context.chromeless,
        personas.persona_a.address1,
        personas.persona_a.city,
        personas.persona_a.state,
        personas.persona_a.zip,
        personas.persona_a.phone
    );
    (await checkpoint(t)).forEach(function(element){t.log(element);})

    t.pass();

});
