         


          if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

            var SCREEN_WIDTH = window.innerWidth;
            var SCREEN_HEIGHT = window.innerHeight;

            var container,stats;

            var camera, scene, loaded;
            var renderer;
            var ray;
            var objects=[];

            var currentScene;


            var controls,time = Date.now();
            var blocker = document.getElementById( 'blocker' );
            var instructions = document.getElementById( 'instructions' );

            var mesh, zmesh, geometry;

            var mouseX = 0, mouseY = 0;

            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

            document.addEventListener( 'mousemove', onDocumentMouseMove, false );

            initLoadScene();
            animate();
            THREEx.Screenshot.bindKey(renderer);



        function initGalleryScene(){

            var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

            if ( havePointerLock ) {

                var element = document.body;

                var pointerlockchange = function ( event ) {

                    if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {

                        controls.enabled = true;

                        blocker.style.display = 'none';
                        console.log('mouse lock on')

                    } else {

                        controls.enabled = false;

                        blocker.style.display = 'block';

                        instructions.style.display = '';
                        console.log('mouse lock off')

                    }

                }

                var pointerlockerror = function ( event ) {
                    instructions.style.display = '';
                }

                // Hook pointer lock state change events
                document.addEventListener( 'pointerlockchange', pointerlockchange, false );
                document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
                document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );

                document.addEventListener( 'pointerlockerror', pointerlockerror, false );
                document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
                document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );

                blocker.addEventListener( 'click', function ( event ) {
                    instructions.style.display = 'none';
                    document.getElementById('keyGUI').style.display = 'block';
                    container.appendChild( stats.domElement );

                    // Ask the browser to lock the pointer
                    element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;

                    if ( /Firefox/i.test( navigator.userAgent ) ) {

                        var fullscreenchange = function ( event ) {

                            if ( document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element ) {

                                document.removeEventListener( 'fullscreenchange', fullscreenchange );
                                document.removeEventListener( 'mozfullscreenchange', fullscreenchange );

                                element.requestPointerLock();
                            }

                        }

                        document.addEventListener( 'fullscreenchange', fullscreenchange, false );
                        document.addEventListener( 'mozfullscreenchange', fullscreenchange, false );

                        element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;

                        element.requestFullscreen();

                    } else {

                        element.requestPointerLock();

                    }

                }, false );

            } else {

                instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';

            }



        }

            function $( id ) {

                return document.getElementById( id );

            }

            function handle_update( result, pieces ) {

                refreshSceneView( result );
                //renderer.initWebGLObjects( result.scene );

                var m, material, count = 0;

                for ( m in result.materials ) {

                    material = result.materials[ m ];
                    if ( ! ( material instanceof THREE.MeshFaceMaterial ) ) {

                        if( !material.program ) {

                            console.log(m);
                            renderer.initMaterial( material, result.scene.__lights, result.scene.fog );

                            count += 1;
                            if( count > pieces ) {

                                //console.log("xxxxxxxxx");
                                break;

                            }

                        }

                    }

                }

            }

            function initLoadScene() {

                container = document.createElement( 'div' );
                document.body.appendChild( container );

                var loadScene = createLoadScene();
                currentScene = 0;


                camera = loadScene.camera;
                scene = loadScene.scene;

                renderer = new THREE.WebGLRenderer({
                        preserveDrawingBuffer : true  // to allow screenshot
                });

                renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
                renderer.domElement.style.position = "relative";
                container.appendChild( renderer.domElement );

                stats = new Stats();
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.top = '0px';
                stats.domElement.style.right = '0px';
                stats.domElement.style.zIndex = 100;


               

                $( "start" ).addEventListener( 'click', onStartClick, false );

                var callbackProgress = function( progress, result ) {

                    var bar = 250,
                        total = progress.total_models + progress.total_textures,
                        loaded = progress.loaded_models + progress.loaded_textures;

                    if ( total )
                        bar = Math.floor( bar * loaded / total );

                    $( "bar" ).style.width = bar + "px";

                    count = 0;
                    for ( var m in result.materials ) count++;

                    handle_update( result, Math.floor( count/total ) );

                }

                var callbackFinished = function( result ) {

                    console.log(result.scene)

                    loaded = result;

                    $( "message" ).style.display = "none";
                    $( "progressbar" ).style.display = "none";
                    $( "start" ).style.display = "block";
                    $( "start" ).className = "enabled";

                    handle_update( result, 1 );

                    result.scene.traverse( function ( object ) {

                        if ( object.userData.ray === true ) {
                            objects.push( object );
                        }

                    } );


                }

                $( "progress" ).style.display = "block";

                var loader = new THREE.SceneLoader();
                loader.callbackProgress = callbackProgress;

                loader.load( "js/scene.js", callbackFinished );

                loader.addGeometryHandler( "binary", THREE.BinaryLoader );
                loader.addGeometryHandler( "ctm", THREE.CTMLoader );
                loader.addGeometryHandler( "vtk", THREE.VTKLoader );
                loader.addGeometryHandler( "stl", THREE.STLLoader );

                loader.addHierarchyHandler( "obj", THREE.OBJLoader );
                loader.addHierarchyHandler( "dae", THREE.ColladaLoader );
                loader.addHierarchyHandler( "utf8", THREE.UTF8Loader );

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, window.innerHeight );

            }

            function setButtonActive( id ) {

                $( "start" ).style.backgroundColor = "green";

            }

            function onStartClick() {

                $( "progress" ).style.display = "none";
                $( "blocker" ).style.display = "block";
                document.body.style.background = "white";
                instructions.style.display = '';

                camera = loaded.currentCamera;
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                scene = loaded.scene;

                controls = new THREE.PointerLockControls( camera  );
                scene.add( controls.getObject() );

                renderer.gammaInput = true;
                renderer.gammaOutput = true;
                renderer.physicallyBasedShading = true;

                var light = new THREE.DirectionalLight( 0xffffff, 1.5 );
                light.position.set( 1, 1, 1 );
                scene.add( light );
                var light = new THREE.DirectionalLight( 0xffffff, 0.75 );
                light.position.set( -1, - 0.5, -1 );
                scene.add( light );

                initGalleryScene();
                currentScene = 1;

                ray = new THREE.Raycaster();
                ray.ray.direction.set( 0, -1, 0 );

                document.body.style.backgroundColor = 'white';

                var manager = new THREE.LoadingManager();
                manager.onProgress = function ( item, loaded, total ) {

                    console.log( item, loaded, total );

                };


            }

       
            function onDocumentMouseMove(event) {

                mouseX = ( event.clientX - windowHalfX * 1.5 );
                mouseY = ( event.clientY - windowHalfY * 1.5 );

            }

            function createLoadScene() {

                var result = {

                    scene:  new THREE.Scene(),
                    camera: new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 1, 1500 )

                };

                result.camera.position.z = 100;

                var object, geometry, material, light, count = 500, range = 200;

                material = new THREE.MeshLambertMaterial( { color:0xffffff } );
                geometry = new THREE.CubeGeometry( 5, 5, 5 );

                result.scene.matrixAutoUpdate = false;

                return result;

            }
                      
            function animate() {

                requestAnimationFrame( animate );
                if (currentScene == 0){
                    renderLoadScene();
                    stats.update();
                }

                if (currentScene == 1){
                    if(controls.enabled){
                controls.isOnObject( false );
                ray.ray.origin.copy( controls.getObject().position );
                ray.ray.origin.y -= 10;  
                ray.ray.origin.z -= 10; 
                var intersections = ray.intersectObjects( objects );
                if ( intersections.length > 0 ) {
                    var distance = intersections[ 0 ].distance;
                    if ( distance > 0 && distance < 10 ) {
                        controls.isOnObject( true );
                    }
                }
                    }

                    controls.update( Date.now() - time );
                    renderer.render( scene, camera );
                    time = Date.now();
           
                }

                stats.update();
            }



            function renderLoadScene() {

                camera.position.x += ( mouseX - camera.position.x ) * .05;
                camera.position.y += ( - mouseY - camera.position.y ) * .05;

                camera.lookAt( scene.position );

                renderer.render( scene, camera );

            }

            // Scene explorer user interface

            function toggle( id ) {

                var scn = $( "section_" + id ).style,
                    btn = $( "plus_" + id );

                if ( scn.display == "block" ) {

                    scn.display = "none";
                    btn.innerHTML = "[+]";

                }
                else {

                    scn.display = "block";
                    btn.innerHTML = "[-]";

                }

            }

            function createToggle( label ) { return function() { toggle( label ) } };

            function refreshSceneView( result ) {

                $( "section_exp" ).innerHTML = generateSceneView( result );
                var config = [ "obj", "geo", "mat", "tex", "lit", "cam" ];
                for ( var i = 0; i < config.length; i++ )
                $( "plus_" + config[i] ).addEventListener( 'click', createToggle( config[i] ), false );

            }

            function generateSection( label, id, objects ) {

                var html = "";

                html += "<h3><a id='plus_" + id + "' href='#'>[+]</a> " + label + "</h3>";
                html += "<div id='section_" + id + "' class='part'>";

                for( var o in objects ) {

                    html += o + "<br/>";

                }
                html += "</div>";

                return html;

            }

            function generateSceneView( result ) {

                var config = [
                [ "Objects",    "obj", result.objects ],
                [ "Geometries", "geo", result.geometries ],
                [ "Materials",  "mat", result.materials ],
                [ "Textures",   "tex", result.textures ],
                [ "Lights",     "lit", result.lights ],
                [ "Cameras",    "cam", result.cameras ]
                ];

                var html = "";

                for ( var i = 0; i < config.length; i++ )
                    html += generateSection( config[i][0], config[i][1], config[i][2] );

                return html;

            }