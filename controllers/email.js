const express = require("express");
const Email = require("../models/email");

const createEmail = async (req, res) => {
    try {
        let email = await Email.find();

        let newEmail = new Email({
            ...req.body,
            companyid: email.length,
        });

        let newSavedEmail = await newEmail.save();

        return res.status(201).json({
            message: "New Email Oject Created Successfully",
            success: true,
            result: newSavedEmail,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Unable to create new email object",
            success: false,
        });
    }
};

const editEmail = async (req, res) => {
    try {
        let email = await Email.findOne({ companyid: req.params.companyid });
        if (!email) {
            return res.status(404).json({
                message: "No email object associated with your company id",
                success: false,
            });
        }

        let data = {
            ...req.body,
        };

        await Email.updateOne({ companyid: req.params.companyid }, data);

        return res.status(200).json({
            message: "Email object successfully modified",
            success: true,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Unable to modify your data",
            success: false,
        });
    }
};

const getEmail = async (req, res) => {

    let email = await Email.find();
    if (email.length < 1) {
        return res.status(404).json({
            message: "You have no email data to fetch",
            success: false,
        });
    }

    return res.status(200).json({
        message: "Your email data fetched successfully",
        success: true,
        result: email
    })
};

module.exports = {
    createEmail,
    editEmail,
    getEmail
};
