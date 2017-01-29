package com.cuttable.api.util;

import org.mindrot.jbcrypt.BCrypt;

public class BCryptUtil {

    public static String encryptPassword(String password) {
        String salt = BCrypt.gensalt();
        return BCrypt.hashpw(password, salt);
    }

    public static boolean areMatchingPasswords(String password, String encryptedPassword) {
        return BCrypt.checkpw(password, encryptedPassword);
    }

}
