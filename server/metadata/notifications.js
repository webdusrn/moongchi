var notifications = {
    "chat": {
        "key": "chat",
        "isStored": false,
        "isOption": false,
        "boxTitle": "kNotiChatTitle",
        "boxBody": "kNotiChatBody",
        "sendTypes": {
            "push": {
                "title": "kNotiChatTitle",
                "body": "kNotiChatBody"
            }
        }
    },
    "report": {
        "key": "report",
        "isStored": true,
        "isOption": false,
        "boxTitle": "kNotiReportTitle",
        "boxBody": "kNotiReportBody",
        "sendTypes": {
            "email": {
                "title": "kNotiReportEmailTitle",
                "body": "kNotiReportEmailBody"
            },
            "push": {
                "title": "kNotiReportPushTitle",
                "body": "kNotiReportPushBody"
            },
            "message": {
                "title": "kNotiReportMessageTitle",
                "body": "kNotiReportMessageBody"
            }
        }
    }
};

module.exports = notifications;
