/// <reference types="cypress" />

import { login } from "./login";



describe('test automation script to login journey', () => {


    it('Login User', () => {

        login();

    });

});