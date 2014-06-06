{

	"metadata": {
		"formatVersion": 3.2,
		"type" : "scene"
	},

	"urlBaseType" : "relativeToHTML",

	"objects": {

		"group" : {
			"position" : [ 0, 0, 0 ],
			"rotation" : [ 0, 0, 0 ],
			"scale"	   : [ 1, 1, 1 ],
			"visible"  : true,
			"children" : {

				"ground" : {
					"geometry" : "plane",
					"material" : "basic_gray",
					"position" : [ 0, 0, 0 ],
					"rotation" : [ -1.57, 0, 0 ],
					"scale"	   : [ 1, 1, 1 ],
					"visible"  : true
				},

				"4_spheres_pyramid" : {
					"type": "dae",
					"url" : "models/collada/4_spheres_pyramid/4_spheres_pyramid.dae",
					"position" : [ -200, 0, 27 ],
					"rotation" : [ -1.57, 0, 0 ],
					"scale"	   : [ 1, 1, 1 ],
					"visible"  : true
				},

				"math_sculpture_2" : {
					"type": "dae",
					"url" : "models/collada/math_sculpture_2/math_sculpture_2.dae",
					"position" : [ -100, 0, 27 ],
					"rotation" : [ 0, 0, 0 ],
					"scale"	   : [ 0.5, 0.5, 0.5 ],
					"visible"  : true
				},

				"multimaterial_cube" : {
					"type": "dae",
					"url" : "models/collada/multimaterial.dae",
					"position" : [ -200, 30, 200 ],
					"rotation" : [ 0, 0, 0 ],
					"scale"	   : [ 30, 30, 30 ],
					"visible"  : true
				},

				"spinning_tower2" : {
					"geometry" : "spin_tower",
					"material" : "phong_object",
					"position" : [ 15, 0, -25 ],
					"rotation" : [ 0, 0, 0 ],
					"scale"	   : [ 10, 10, 10 ],
					"visible"  : true
				},

				"wooden_sculpture" : {
					"geometry" : "wood_sculpture",
					"material" : "phong_object",
					"position" : [ 25, 0, -50 ],
					"rotation" : [ 0, 0, 0 ],
					"scale"	   : [ 25, 25, 25 ],
					"visible"  : true
				},

				"impossible_sculpture" : {
					"geometry" : "impossible_sculpture",
					"material" : "phong_object",
					"position" : [100, 0, 100 ],
					"rotation" : [ 0, 0, 0 ],
					"scale"	   : [ 25, 25, 25 ],
					"visible"  : true
				},

				"abstract_dreamworld" : {
					"geometry" : "abstract_dreamworld",
					"material" : "phong_object",
					"position" : [ 1000, 0, 500 ],
					"rotation" : [ 0, 0, 0 ],
					"scale"	   : [ 15, 15, 15 ],
					"visible"  : true
				},

				"complex_geometry_sculpture" : {
					"geometry" : "complex_geometry_sculpture",
					"material" : "phong_object",
					"position" : [ 1000, 0, 1000 ],
					"rotation" : [ 0, 0, 0 ],
					"scale"	   : [ 15, 15, 15 ],
					"visible"  : true
				},
			
				"camera1": {
					"type"  : "PerspectiveCamera",
					"fov"   : 50,
					"aspect": 1.33333,
					"near"  : 1,
					"far"   : 1000,
					"position": [ 0, 0, 0 ],
					"target"  : [ 0, 0, 0 ]
				},

				"camera2": {
					"type"  : "OrthographicCamera",
					"left"  : 0,
					"right" : 1024,
					"top"   : 0,
					"bottom": 1024,
					"near"  : 1,
					"far"   : 1000,
					"position": [ 0, 0, 0 ],
					"target"  : [ 0, 0, 0 ]
				},

				"light1": {
					"type"		 : "DirectionalLight",
					"direction"	 : [ 1, 0, 0 ],
					"color" 	 : 16777215,
					"intensity"	 : 1
				},

				"light2": {
					"type"	  : "PointLight",
					"position": [ 0, 250, 0 ],
					"color"   : 16777215,
					"intensity"	 : 1.25
				}
			}
		}

	},

	"geometries": {

		"plane": {
			"type"   : "plane",
			"width"  : 10000,
			"height" : 10000,
			"widthSegments"  : 500,
			"heightSegments" : 500
		},

		"spin_tower": {
			"type": "binary",
			"url" : "models/obj/spinning_tower/spinning_tower2.js"
		},

		"wood_sculpture": {
			"type": "binary",
			"url" : "models/obj/wooden_sculpture/wooden_sculpture.js"
		},

		"impossible_sculpture": {
			"type": "binary",
			"url" : "models/obj/impossible_sculpture/impossible_sculpture.js"
		},

		"abstract_dreamworld": {
			"type": "binary",
			"url" : "models/obj/abstract_dreamworld/abstract_dreamworld.js"
		},

		"complex_geometry_sculpture": {
			"type": "binary",
			"url" : "models/obj/complex_geometry_sculpture/complex_geometry_sculpture.js"
		}


	},

	"embeds": {

	},

	"materials": {

		"basic_gray": {
			"type": "MeshBasicMaterial",
			"parameters": { "color": "black", "wireframe": true }
		},

		"phong_hand": {
			"type": "MeshPhongMaterial",
			"parameters": { "ambient": 14531481, "specular": 2236962, "shininess": 40, "wrapAround": true, "wrapRGB": [ 0.15, 0.02, 0.01 ] }
		},

		"phong_object": {
			"type": "MeshFaceMaterial",
			"parameters": { "color": 16737894, "ambient": 16737894, "specular": 2236962, "shininess": 40, "wrapAround": true, "wrapRGB": [ 0.15, 0.02, 0.01 ] }
		}
	},

	"textures": {

	},

	"fogs":	{
		"basic": {
			"type": "linear",
			"color": [1,1,1],
			"near": 0,
			"far": 1000
		},

		"exponential": {
			"type": "exp2",
			"color": [1,1,1],
			"density": 0.005
		},

		"black": {
			"type": "exp2",
			"color": [0,0,0],
			"density": 0.005
		}
	},

	"defaults": {
		"bgcolor": [0,0,0],
		"bgalpha": 1,
		"camera": "camera1",
		"fog": "basic"
	}

}
