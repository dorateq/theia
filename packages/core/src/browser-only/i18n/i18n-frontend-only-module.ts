// *****************************************************************************
// Copyright (C) 2023 EclipseSource and others.
//
// This program and the accompanying materials are made available under the
// terms of the Eclipse Public License v. 2.0 which is available at
// http://www.eclipse.org/legal/epl-2.0.
//
// This Source Code may also be made available under the following Secondary
// Licenses when the conditions for such availability set forth in the Eclipse
// Public License v. 2.0 are satisfied: GNU General Public License, version 2
// with the GNU Classpath Exception which is available at
// https://www.gnu.org/software/classpath/license.html.
//
// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-only WITH Classpath-exception-2.0
// *****************************************************************************

import { ContainerModule } from 'inversify';
import { AsyncLocalizationProvider, LanguageInfo, Localization } from '../../common/i18n/localization';
import { LanguageQuickPickService } from '../../browser/i18n/language-quick-pick-service';

export default new ContainerModule(bind => {
    const i18nMock: AsyncLocalizationProvider = {
        getCurrentLanguage: async (): Promise<string> => 'en',
        setCurrentLanguage: async (_languageId: string): Promise<void> => {

        },
        getAvailableLanguages: async (): Promise<LanguageInfo[]> =>
            []
        ,
        loadLocalization: async (_languageId: string): Promise<Localization> => ({
            translations: {},
            languageId: 'en'
        })
    };
    bind(AsyncLocalizationProvider).toConstantValue(i18nMock);
    bind(LanguageQuickPickService).toSelf().inSingletonScope();
});
