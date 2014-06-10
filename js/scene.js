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

				"kim" : {
					"geometry" : "kim",
					"position" : [ 0, 0, 0 ],
					"rotation" : [ 0, 0, 0 ],
					"scale"	   : [ 10, 10, 10 ],
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

		"kim": {
			"type": "binary",
			"url" : "models/obj-js/kim/kim.js"
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
