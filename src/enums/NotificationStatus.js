let NotificationStatus = {
    ERROR: 1,
    INFO: 2,
    SUCCESS: 3
};

let Labels = {};
Labels[NotificationStatus.ERROR] = 'Error';
Labels[NotificationStatus.INFO] = 'Info';
Labels[NotificationStatus.SUCCESS] = 'Success';

export {NotificationStatus, Labels};