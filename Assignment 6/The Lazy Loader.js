
"use strict";

function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.3
                ? reject(new Error("Profile failed"))
                : resolve("Profile Loaded");
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.3
                ? reject(new Error("Posts failed"))
                : resolve("Posts Loaded");
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.3
                ? reject(new Error("Messages failed"))
                : resolve("Messages Loaded");
        }, 1000);
    });
}

async function loadDashboard() {
    const startTime = Date.now();

    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    const moduleNames = ["Profile", "Posts", "Messages"];

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`${moduleNames[index]}: Success - ${result.value}`);
        } else {
            console.log(
                `${moduleNames[index]}: Failed - ${result.reason.message}`
            );
        }
    });

    const totalTime = Date.now() - startTime;
    console.log(`Total time taken: ${totalTime} ms`);
}

loadDashboard();
