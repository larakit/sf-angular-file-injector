<?php
/**
 * Created by Larakit.
 * Link: http://github.com/larakit
 * User: Alexey Berdnikov
 * Date: 15.06.17
 * Time: 15:20
 */
\Larakit\StaticFiles\Manager::package('larakit/sf-angular-file-injector')
    ->usePackage('larakit/lk-angular')
    ->setSourceDir('public');

//##################################################
//      Регистрация компонента страницы
//##################################################
$components_directory = '/packages/larakit/sf-angular-file-injector/components/';
\Larakit\LkNgComponent::register('adminlte-clipboard', $components_directory);
